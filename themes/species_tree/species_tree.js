
var epeek_theme = function() {
    "use strict";

    var tree_theme = function (sT, div) {
	sT.layout("vertical");
	sT(div);
	setTimeout(function(){
// 	    sT.layout("vertical");
	    sT.subtree(["human", "mouse", "other2"]);
	    // sT.subtree(["Homo_sapiens", "Mus_musculus", "Gorilla_gorilla"]);
 	    sT.update();
	}, 2000);
    };

    return tree_theme;
};
