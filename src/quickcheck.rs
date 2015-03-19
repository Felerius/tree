extern crate quickcheck;

use compare::Compare;
use self::quickcheck::{Arbitrary, Gen};
use std::default::Default;
use super::{Map, Set};

impl<K, V, C> Arbitrary for Map<K, V, C>
    where K: Arbitrary, V: Arbitrary, C: 'static + Clone + Compare<K> + Default + Send {

    fn arbitrary<G: Gen>(gen: &mut G) -> Map<K, V, C> {
        let vec: Vec<(K, V)> = Arbitrary::arbitrary(gen);
        vec.into_iter().collect()
    }

    fn shrink(&self) -> Box<Iterator<Item=Map<K, V, C>>> {
        let vec: Vec<(K, V)> = self.clone().into_iter().collect();
        box vec.shrink().map(|vec| vec.into_iter().collect())
    }
}

impl<T, C> Arbitrary for Set<T, C>
    where T: Arbitrary, C: 'static + Clone + Compare<T> + Default + Send {

    fn arbitrary<G: Gen>(gen: &mut G) -> Set<T, C> {
        let vec: Vec<T> = Arbitrary::arbitrary(gen);
        vec.into_iter().collect()
    }

    fn shrink(&self) -> Box<Iterator<Item=Set<T, C>>> {
        let vec: Vec<T> = self.clone().into_iter().collect();
        box vec.shrink().map(|vec| vec.into_iter().collect())
    }
}