var tnt_theme_tree_ensembl_species = function() {
    "use strict";

    var tnt_theme = function (tree_vis, div) {

	var base_root;

        var get_tree_nodes_by_names = function (tree, names) {
	    var nodes = []
	    for (var i=0; i<names.length; i++) {
		var node = tree.find_node_by_name(names[i]);
		if (node !== undefined) {
		    nodes.push(node);
		}
	    }
	    return nodes;
	};

	var menu_pane = d3.select(div)
	    .append("div")
	    .append("span")
	    .text("Ensembl Release:   ");

	var sel = menu_pane
	    .append("select")
	    .on("change", function(d) {
		 // tree_vis.subtree(tree_vis.get_tree_nodes_by_names(ensembl_species[this.value]));
		tree_vis.subtree (get_tree_nodes_by_names (base_root, ensembl_species[this.value]));
		tree_vis.update();
	    });

	for (var i in ensembl_species) {
	    sel
		.append("option")
		.attr("value", i)
		.text(i);
	}
	// The last one is the option selected
	d3.select("option[value='75']")
	    .attr("selected", 1);

	tree_vis
	    .data(tnt.tree.parse_newick(newick))
	    .layout(tnt.tree.layout.radial().width(650).scale(false));

	tree_vis(div);
	base_root = tree_vis.root();
    };

    return tnt_theme;
};

// newick tree
var newick = "(((C.elegans,Fly),(((((((((Tasmanian Devil,Wallaby,Opossum),((Armadillo,Sloth),(Rock hyrax,Tenrec,Elephant),(((Rabbit,Pika),(((Rat,Mouse),Kangaroo rat,Squirrel),Guinea Pig)),((Mouse lemur,Bushbaby),((((((Chimp,Human,Gorilla),Orangutan),Gibbon),Macaque),Marmoset),Tarsier)),Tree Shrew),((Microbat,Flying fox),(Hedgehog,Shrew),((Panda,Dog,Domestic ferret),Cat),((Cow,Sheep),Pig,Alpaca,Dolphin),Horse))),Platypus),((((Collared flycatcher,Zebra finch),(Chicken,Turkey),Duck),Chinese softshell turtle),Anole lizard)),Xenopus),Coelacanth),(((Zebrafish,Cave fish),((((Medaka,Platyfish),Stickleback),(Fugu,Tetraodon),Tilapia),Cod)),Spotted gar)),Lamprey),(C.savignyi,C.intestinalis))),S.cerevisiae);"

// release_id => species
var ensembl_species = {"33":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow"],"32":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow"],"63":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon"],"21":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp"],"71":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Chinese softshell turtle"],"7":["Human","Mouse","Zebrafish","Mosquito","Fugu"],"26":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon"],"18":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"72":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Chinese softshell turtle"],"16":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"44":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Pig","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig"],"55":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby"],"74":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Duck","Panda","Sheep","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Spotted gar","Chinese softshell turtle","Collared flycatcher","Cave fish"],"27":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog"],"57":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey"],"61":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda"],"20":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"10":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"31":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis"],"35":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum"],"11":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"48":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Anole lizard","Pika","Mouse lemur"],"65":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod"],"29":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae"],"50":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pika","Mouse lemur","Orangutan"],"39":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback"],"64":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil"],"58":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey"],"41":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Pig","Cat","Shrew","Hedgehog"],"12":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"15":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"52":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla"],"60":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Panda"],"56":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset"],"73":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Duck","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Chinese softshell turtle","Collared flycatcher"],"66":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Coelacanth"],"45":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig"],"19":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"62":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda"],"54":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth"],"67":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Coelacanth"],"70":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Chinese softshell turtle"],"68":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Coelacanth","Chinese softshell turtle"],"2":["Human"],"17":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"1":["Human"],"30":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae"],"25":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","C.briggsae"],"28":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus"],"75":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Duck","Panda","Sheep","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Spotted gar","Chinese softshell turtle","Collared flycatcher","Cave fish"],"40":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus"],"14":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"69":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Lamprey","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset","Turkey","Panda","Gibbon","Tasmanian Devil","Cod","Tilapia","Domestic ferret","Coelacanth","Platyfish","Chinese softshell turtle"],"59":["Human","Mouse","Zebrafish","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth","Wallaby","Marmoset"],"49":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pig","Anole lizard","Pika","Mouse lemur","Orangutan"],"24":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon"],"53":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Anole lizard","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch","Sloth"],"22":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken"],"42":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Pig","Cat","Shrew","Bushbaby","Microbat","Hedgehog"],"46":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Anole lizard"],"23":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken"],"13":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans"],"6":["Human","Mouse","Zebrafish","Mosquito"],"3":["Human","Mouse"],"36":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti"],"9":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu"],"51":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew","Horse","Pika","Mouse lemur","Orangutan","Kangaroo rat","Alpaca","Rock hyrax","Flying fox","Tarsier","Dolphin","Gorilla","Zebra finch"],"47":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew"],"8":["Human","Mouse","Zebrafish","Mosquito","Fugu"],"38":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Stickleback"],"4":["Human","Mouse","Zebrafish"],"34":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow"],"37":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Honeybee","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit"],"43":["Human","Mouse","Zebrafish","Mosquito","Rat","Fugu","Fly","C.elegans","Chimp","Chicken","Tetraodon","Dog","Xenopus","S.cerevisiae","C.intestinalis","Cow","Opossum","Macaque","C.savignyi","Elephant","A.aegypti","Armadillo","Tenrec","Rabbit","Medaka","Stickleback","Platypus","Pig","Cat","Shrew","Bushbaby","Microbat","Hedgehog","Squirrel","Guinea Pig","Tree Shrew"],"5":["Human","Mouse","Zebrafish","Mosquito"]};
