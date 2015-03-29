extern crate quickcheck;
extern crate rand;

use self::quickcheck::{Arbitrary, Gen, TestResult, quickcheck};
use self::rand::Rng;
use super::{Link, Node};
use Map;

/// An operation on a `Map`.
#[derive(Clone, Debug)]
enum Op<K> where K: Clone + Ord {
    /// Insert a key into the map.
    Insert(K),
    /// Remove the key at index `n % map.len()` from the map.
    Remove(usize),
    /// Remove the maximum key.
    RemoveMax,
    /// Remove the minimum key.
    RemoveMin,
}

impl<K> Arbitrary for Op<K> where K: Arbitrary + Ord {
    fn arbitrary<G: Gen>(gen: &mut G) -> Op<K> {
        match gen.gen_range(0, 4) {
            0 => Op::Insert(Arbitrary::arbitrary(gen)),
            1 => Op::Remove(Arbitrary::arbitrary(gen)),
            2 => Op::RemoveMax,
            _ => Op::RemoveMin,
        }
    }

    fn shrink(&self) -> Box<Iterator<Item=Self>> {
        match *self {
            Op::Insert(ref key) => Box::new(key.shrink().map(Op::Insert)),
            Op::Remove(index) => Box::new(index.shrink().map(Op::Remove)),
            Op::RemoveMax | Op::RemoveMin => Box::new(None.into_iter()),
        }
    }
}

impl<K> Op<K> where K: Clone + Ord {
    /// Perform the operation on the given map.
    fn exec(self, map: &mut Map<K, ()>) {
        match self {
            Op::Insert(key) => { map.insert(key, ()); }
            Op::Remove(index) => if !map.is_empty() {
                let key = map.iter().nth(index % map.len()).unwrap().0.clone();
                map.remove(&key);
            },
            Op::RemoveMax => { map.remove_max(); }
            Op::RemoveMin => { map.remove_min(); }
        }
    }
}

// Adapted from https://github.com/Gankro/collect-rs/tree/map.rs
fn assert_andersson_tree<K, V>(map: &Map<K, V>) where K: Ord {
    fn check_left<K, V>(link: &Link<K, V>, parent: &Node<K, V>) where K: Ord {
        match *link {
            None => assert!(parent.level == 1),
            Some(ref node) => {
                assert!(node.key < parent.key);
                assert!(node.level == parent.level - 1);
                check_left(&node.left, node);
                check_right(&node.right, node, false);
            }
        }
    }

    fn check_right<K, V>(link: &Link<K, V>, parent: &Node<K, V>, parent_red: bool) where K: Ord {
        match *link {
            None => assert!(parent.level == 1),
            Some(ref node) => {
                assert!(node.key > parent.key);
                let red = node.level == parent.level;
                if parent_red { assert!(!red); }
                assert!(red || node.level == parent.level - 1);
                check_left(&node.left, node);
                check_right(&node.right, node, red);
            }
        }
    }

    if let Some(ref node) = *map.root() {
        check_left(&node.left, node);
        check_right(&node.right, node, false);
    }
}

#[test]
#[allow(trivial_casts)]
fn test_andersson() {
    fn check(ops: Vec<Op<u32>>) -> TestResult {
        let mut map = Map::new();
        for op in ops { op.exec(&mut map); }
        assert_andersson_tree(&map);
        TestResult::passed()
    }

    quickcheck(check as fn(Vec<Op<u32>>) -> TestResult);
}