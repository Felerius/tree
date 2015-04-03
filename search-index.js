var searchIndex = {};
searchIndex['tree'] = {"items":[[0,"","tree","An ordered map and set based on a binary search tree.",null,null],[0,"map","","An ordered map based on a binary search tree.",null,null],[3,"OccupiedEntry","tree::map","An occupied entry.",null,null],[3,"VacantEntry","","A vacant entry.",null,null],[3,"Map","","An ordered map based on a binary search tree.",null,null],[3,"IntoIter","","An iterator that consumes the map.",null,null],[3,"Iter","","An iterator over the map's entries with immutable references to the values.",null,null],[3,"IterMut","","An iterator over the map's entries with mutable references to the values.",null,null],[3,"IntoRange","","An iterator that consumes the map, yielding only those entries whose keys lie in a given range.",null,null],[3,"Range","","An iterator over the map's entries whose keys lie in a given range with immutable references to\nthe values.",null,null],[3,"RangeMut","","An iterator over the map's entries whose keys lie in a given range with mutable references to\nthe values.",null,null],[4,"Entry","","An entry in the map.",null,null],[13,"Occupied","","An occupied entry.",0,null],[13,"Vacant","","A vacant entry.",0,null],[11,"clone","","",1,{"inputs":[{"name":"map"}],"output":{"name":"map"}}],[11,"new","","Creates an empty map ordered according to the natural order of its keys.",1,{"inputs":[{"name":"map"}],"output":{"name":"map"}}],[11,"with_cmp","","Creates an empty map ordered according to the given comparator.",1,{"inputs":[{"name":"map"},{"name":"c"}],"output":{"name":"map"}}],[11,"is_empty","","Checks if the map is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"bool"}}],[11,"len","","Returns the number of entries in the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"usize"}}],[11,"cmp","","Returns a reference to the map's comparator.",1,{"inputs":[{"name":"map"}],"output":{"name":"c"}}],[11,"clear","","Removes all entries from the map.",1,{"inputs":[{"name":"map"}],"output":null}],[11,"insert","","Inserts an entry into the map, returning the previous value, if any, associated\nwith the key.",1,{"inputs":[{"name":"map"},{"name":"k"},{"name":"v"}],"output":{"name":"option"}}],[11,"remove","","Removes and returns the entry whose key is equal to the given key, returning\n`None` if the map does not contain the key.",1,{"inputs":[{"name":"map"},{"name":"q"}],"output":{"name":"option"}}],[11,"entry","","Returns the map's entry corresponding to the given key.",1,{"inputs":[{"name":"map"},{"name":"k"}],"output":{"name":"entry"}}],[11,"contains_key","","Checks if the map contains the given key.",1,{"inputs":[{"name":"map"},{"name":"q"}],"output":{"name":"bool"}}],[11,"get","","Returns a reference to the value associated with the given key, or `None` if the\nmap does not contain the key.",1,{"inputs":[{"name":"map"},{"name":"q"}],"output":{"name":"option"}}],[11,"get_mut","","Returns a mutable reference to the value associated with the given key, or `None`\nif the map does not contain the key.",1,{"inputs":[{"name":"map"},{"name":"q"}],"output":{"name":"option"}}],[11,"max","","Returns a reference to the map's maximum key and a reference to its associated\nvalue, or `None` if the map is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"max_mut","","Returns a reference to the map's maximum key and a mutable reference to its\nassociated value, or `None` if the map is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"remove_max","","Removes the map's maximum key and returns it and its associated value, or `None` if the map\nis empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"max_entry","","Returns the map's entry corresponding to its maximum key.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"min","","Returns a reference to the map's minimum key and a reference to its associated\nvalue, or `None` if the map is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"min_mut","","Returns a reference to the map's minimum key and a mutable reference to its\nassociated value, or `None` if the map is empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"remove_min","","Removes the map's minimum key and returns it and its associated value, or `None` if the map\nis empty.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"min_entry","","Returns the map's entry corresponding to its minimum key.",1,{"inputs":[{"name":"map"}],"output":{"name":"option"}}],[11,"pred","","Returns a reference to the predecessor of the given key and a\nreference to its associated value, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"pred_mut","","Returns a reference to the predecessor of the given key and a\nmutable reference to its associated value, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"remove_pred","","Removes the predecessor of the given key from the map and returns it and its associated\nvalue, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"pred_entry","","Returns the entry corresponding to the predecessor of the given key.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"succ","","Returns a reference to the successor of the given key and a\nreference to its associated value, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"succ_mut","","Returns a reference to the successor of the given key and a\nmutable reference to its associated value, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"remove_succ","","Removes the successor of the given key from the map and returns it and its associated\nvalue, or `None` if no such key is present in the map.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"succ_entry","","Returns the entry corresponding to the successor of the given key.",1,{"inputs":[{"name":"map"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"into_iter","","Returns an iterator that consumes the map.",1,{"inputs":[{"name":"map"}],"output":{"name":"intoiter"}}],[11,"iter","","Returns an iterator over the map's entries with immutable references to the values.",1,{"inputs":[{"name":"map"}],"output":{"name":"iter"}}],[11,"iter_mut","","Returns an iterator over the map's entries with mutable references to the values.",1,{"inputs":[{"name":"map"}],"output":{"name":"itermut"}}],[11,"into_range","","Returns an iterator that consumes the map, yielding only those entries whose keys lie in\nthe given range.",1,{"inputs":[{"name":"map"},{"name":"bound"},{"name":"bound"}],"output":{"name":"intorange"}}],[11,"range","","Returns an iterator over the map's entries whose keys lie in the given range with immutable\nreferences to the values.",1,{"inputs":[{"name":"map"},{"name":"bound"},{"name":"bound"}],"output":{"name":"range"}}],[11,"range_mut","","Returns an iterator over the map's entries whose keys lie in the given range with mutable\nreferences to the values.",1,{"inputs":[{"name":"map"},{"name":"bound"},{"name":"bound"}],"output":{"name":"rangemut"}}],[11,"fmt","","",1,{"inputs":[{"name":"map"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[{"name":"map"}],"output":{"name":"map"}}],[11,"extend","","",1,{"inputs":[{"name":"map"},{"name":"i"}],"output":null}],[11,"from_iter","","",1,{"inputs":[{"name":"map"},{"name":"i"}],"output":{"name":"map"}}],[11,"hash","","",1,{"inputs":[{"name":"map"},{"name":"h"}],"output":null}],[6,"Output","","",null,null],[11,"index","","",1,{"inputs":[{"name":"map"},{"name":"q"}],"output":{"name":"v"}}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[11,"into_iter","","",1,{"inputs":[{"name":"map"}],"output":{"name":"intoiter"}}],[11,"eq","","",1,{"inputs":[{"name":"map"},{"name":"map"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"map"},{"name":"map"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"map"},{"name":"map"}],"output":{"name":"ordering"}}],[11,"clone","","",2,{"inputs":[{"name":"intoiter"}],"output":{"name":"intoiter"}}],[6,"Item","","",null,null],[11,"next","","",2,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"clone","","",3,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[6,"Item","","",null,null],[11,"next","","",3,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",4,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"itermut"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"intorange"}],"output":{"name":"intorange"}}],[6,"Item","","",null,null],[11,"next","","",5,{"inputs":[{"name":"intorange"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next_back","","",5,{"inputs":[{"name":"intorange"}],"output":{"name":"option"}}],[11,"clone","","",6,{"inputs":[{"name":"range"}],"output":{"name":"range"}}],[6,"Item","","",null,null],[11,"next","","",6,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[6,"Item","","",null,null],[11,"next","","",7,{"inputs":[{"name":"rangemut"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"next_back","","",7,{"inputs":[{"name":"rangemut"}],"output":{"name":"option"}}],[11,"or_insert","","Returns the entry's value, inserting the given default if the entry is vacant.",0,{"inputs":[{"name":"entry"},{"name":"v"}],"output":{"name":"v"}}],[11,"or_insert_with","","Returns the entry's value, inserting the given function's result if the entry is vacant.",0,{"inputs":[{"name":"entry"},{"name":"f"}],"output":{"name":"v"}}],[0,"set","tree","An ordered set based on a binary search tree.",null,null],[3,"Set","tree::set","An ordered set based on a binary search tree.",null,null],[3,"IntoIter","","An iterator that consumes the set.",null,null],[3,"Iter","","An iterator over the set.",null,null],[3,"IntoRange","","An iterator that consumes the set, yielding only those items that lie in a given range.",null,null],[3,"Range","","An iterator over the set's items that lie in a given range.",null,null],[3,"OccupiedEntry","","An occupied entry.",null,null],[3,"VacantEntry","","A vacant entry.",null,null],[4,"Entry","","An entry in the set.",null,null],[13,"Occupied","","An occupied entry.",8,null],[13,"Vacant","","A vacant entry.",8,null],[11,"clone","","",9,{"inputs":[{"name":"set"}],"output":{"name":"set"}}],[11,"new","","Creates an empty set ordered according to the natural order of its items.",9,{"inputs":[{"name":"set"}],"output":{"name":"set"}}],[11,"with_cmp","","Creates an empty set ordered according to the given comparator.",9,{"inputs":[{"name":"set"},{"name":"c"}],"output":{"name":"set"}}],[11,"is_empty","","Checks if the set is empty.",9,{"inputs":[{"name":"set"}],"output":{"name":"bool"}}],[11,"len","","Returns the number of items in the set.",9,{"inputs":[{"name":"set"}],"output":{"name":"usize"}}],[11,"cmp","","Returns a reference to the set's comparator.",9,{"inputs":[{"name":"set"}],"output":{"name":"c"}}],[11,"clear","","Removes all items from the set.",9,{"inputs":[{"name":"set"}],"output":null}],[11,"insert","","Inserts an item into the set, returning `true` if the set did not already contain the item.",9,{"inputs":[{"name":"set"},{"name":"t"}],"output":{"name":"bool"}}],[11,"remove","","Removes the given item from the set, returning `true` if the set contained the item.",9,{"inputs":[{"name":"set"},{"name":"q"}],"output":{"name":"bool"}}],[11,"entry","","Returns the set's entry corresponding to the given item.",9,{"inputs":[{"name":"set"},{"name":"t"}],"output":{"name":"entry"}}],[11,"contains","","Checks if the set contains the given item.",9,{"inputs":[{"name":"set"},{"name":"q"}],"output":{"name":"bool"}}],[11,"max","","Returns a reference to the set's maximum item, or `None` if the set is empty.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"remove_max","","Removes and returns the set's maximum item, or `None` if the set is empty.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"max_entry","","Returns the entry corresponding to the set's maximum item.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"min","","Returns a reference to the set's minimum item, or `None` if the set is empty.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"remove_min","","Removes and returns the set's minimum item, or `None` if the set is empty.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"min_entry","","Returns the entry corresponding to the set's minimum item.",9,{"inputs":[{"name":"set"}],"output":{"name":"option"}}],[11,"pred","","Returns a reference to the predecessor of the given item, or\n`None` if no such item is present in the set.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"remove_pred","","Removes the predecessor of the given item from the set and returns it, or `None` if no such\nitem present in the set.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"pred_entry","","Returns the entry corresponding to the predecessor of the given item.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"succ","","Returns a reference to the successor of the given item, or\n`None` if no such item is present in the set.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"remove_succ","","Removes the successor of the given item from the set and returns it, or `None` if no such\nitem present in the set.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"succ_entry","","Returns the entry corresponding to the successor of the given item.",9,{"inputs":[{"name":"set"},{"name":"q"},{"name":"bool"}],"output":{"name":"option"}}],[11,"into_iter","","Returns an iterator that consumes the set.",9,{"inputs":[{"name":"set"}],"output":{"name":"intoiter"}}],[11,"iter","","Returns an iterator over the set.",9,{"inputs":[{"name":"set"}],"output":{"name":"iter"}}],[11,"into_range","","Returns an iterator that consumes the set, yielding only those items that lie in the given\nrange.",9,{"inputs":[{"name":"set"},{"name":"bound"},{"name":"bound"}],"output":{"name":"intorange"}}],[11,"range","","Returns an iterator over the set's items that lie in the given range.",9,{"inputs":[{"name":"set"},{"name":"bound"},{"name":"bound"}],"output":{"name":"range"}}],[11,"fmt","","",9,{"inputs":[{"name":"set"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",9,{"inputs":[{"name":"set"}],"output":{"name":"set"}}],[11,"extend","","",9,{"inputs":[{"name":"set"},{"name":"i"}],"output":null}],[11,"from_iter","","",9,{"inputs":[{"name":"set"},{"name":"i"}],"output":{"name":"set"}}],[11,"hash","","",9,{"inputs":[{"name":"set"},{"name":"h"}],"output":null}],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[6,"Item","","",null,null],[6,"IntoIter","","",null,null],[11,"into_iter","","",9,{"inputs":[{"name":"set"}],"output":{"name":"intoiter"}}],[11,"eq","","",9,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",9,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"option"}}],[11,"cmp","","",9,{"inputs":[{"name":"set"},{"name":"set"}],"output":{"name":"ordering"}}],[11,"clone","","",10,{"inputs":[{"name":"intoiter"}],"output":{"name":"intoiter"}}],[6,"Item","","",null,null],[11,"next","","",10,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"next_back","","",10,{"inputs":[{"name":"intoiter"}],"output":{"name":"option"}}],[11,"clone","","",11,{"inputs":[{"name":"iter"}],"output":{"name":"iter"}}],[6,"Item","","",null,null],[11,"next","","",11,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"size_hint","","",11,null],[11,"next_back","","",11,{"inputs":[{"name":"iter"}],"output":{"name":"option"}}],[11,"clone","","",12,{"inputs":[{"name":"intorange"}],"output":{"name":"intorange"}}],[6,"Item","","",null,null],[11,"next","","",12,{"inputs":[{"name":"intorange"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"next_back","","",12,{"inputs":[{"name":"intorange"}],"output":{"name":"option"}}],[11,"clone","","",13,{"inputs":[{"name":"range"}],"output":{"name":"range"}}],[6,"Item","","",null,null],[11,"next","","",13,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"size_hint","","",13,null],[11,"next_back","","",13,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"get","","Returns a reference to the entry's item.",14,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"t"}}],[11,"remove","","Removes the entry from the set and returns its item.",14,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"t"}}],[11,"insert","","Inserts the entry into the set with its item.",15,{"inputs":[{"name":"vacantentry"}],"output":null}],[11,"key","alloc::boxed","",16,{"inputs":[{"name":"box"}],"output":{"name":"k"}}],[11,"item","","",16,null],[11,"left","","",16,{"inputs":[{"name":"box"}],"output":{"name":"link"}}],[11,"right","","",16,{"inputs":[{"name":"box"}],"output":{"name":"link"}}],[11,"key","tree::map","Returns a reference to the entry's key.",17,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"k"}}],[11,"get","","Returns a reference to the entry's value.",17,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"get_mut","","Returns a mutable reference to the entry's value.",17,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"into_mut","","Returns a mutable reference to the entry's value with the same lifetime as the map.",17,{"inputs":[{"name":"occupiedentry"}],"output":{"name":"v"}}],[11,"insert","","Replaces the entry's value with the given value, returning the old one.",17,{"inputs":[{"name":"occupiedentry"},{"name":"v"}],"output":{"name":"v"}}],[11,"remove","","Removes the entry from the map and returns its key and value.",17,null],[11,"insert","","Inserts the entry into the map with its key and the given value, returning a mutable\nreference to the value with the same lifetime as the map.",18,{"inputs":[{"name":"vacantentry"},{"name":"v"}],"output":{"name":"v"}}],[11,"arbitrary","","",1,{"inputs":[{"name":"map"},{"name":"g"}],"output":{"name":"map"}}],[11,"shrink","","",1,{"inputs":[{"name":"map"}],"output":{"name":"box"}}],[11,"arbitrary","tree::set","",9,{"inputs":[{"name":"set"},{"name":"g"}],"output":{"name":"set"}}],[11,"shrink","","",9,{"inputs":[{"name":"set"}],"output":{"name":"box"}}]],"paths":[[4,"Entry"],[3,"Map"],[3,"IntoIter"],[3,"Iter"],[3,"IterMut"],[3,"IntoRange"],[3,"Range"],[3,"RangeMut"],[4,"Entry"],[3,"Set"],[3,"IntoIter"],[3,"Iter"],[3,"IntoRange"],[3,"Range"],[3,"OccupiedEntry"],[3,"VacantEntry"],[3,"Box"],[3,"OccupiedEntry"],[3,"VacantEntry"]]};
initSearch(searchIndex);
