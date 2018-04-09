function getHeightData(img, scale) {
	if(scale == undefined) {
		scale = 1;
	}

    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d');

    var size = img.width * img.height;
    var data = new Float32Array(size);

    context.drawImage(img, 0, 0);

    for(var i = 0; i < size; i++) {
    	data[i] = 0;
    }

    var imgd = context.getImageData(0, 0, img.width, img.height);
    var pix = imgd.data;

    var j = 0;
    for(var i = 0; i < pix.length; i += 4) {
        var all = pix[i] + pix[i+1] + pix[i+2];
        data[j++] = scale * all / 3;
    }

    return data;
}

function drawTerrain(resolution, maxRes) {
    var terrain_scaleContainer = new THREE.Group();

    var img = new Image();
    img.src = "textures/heightmap_" + resolution + ".png";

    img.onload = function() {
        var data = getHeightData(img, 0.3);

        var size = 0.05; // Box size
        var waterLevel = 8.5;
        var waterOpacity = 0.5;
        var scaleXZ = maxRes / resolution; // Scale factor according to the resolution
        var treeProbability = 1/20 * scaleXZ; // Higher probability with fewer cubes

        var terrain = new THREE.Group();
        var groundGroup = new THREE.Group();

        var treesGroup = new THREE.Group();



        var geometry = new THREE.BoxGeometry(size, size, size); // Same geometry for ground and water


        for(var i = 0; i < data.length; i++) {
            var height = data[i];

            // Ground color according to the height value
            var c;
            if(height < 12) {
                c = col("grey", 0);
            } else if(height < 14) {
                c = randomValue(col("grey", 0), col("green", 0), 1/3);
            } else if(height < 30) {
                c = randomValue(col("green", 0), col("green", 1), 1/2);
            } else if(height < 36) {
                c = randomValue(col("brown", 0), col("green", 1), 1/3);
            } else {
                c = randomValue(col("grey", 1), col("brown", 0), 1/3);
            }

            // Ground
            var groundMaterial = new THREE.MeshPhongMaterial( {color: c} );
            var ground = new THREE.Mesh(geometry, groundMaterial);
            ground.scale.y = height; // Box scaling along the y axis according to the height
            ground.position.set(i % resolution * size, height * size / 2, Math.floor(i / resolution) * size); // Box positioning (x and z according to the resolution, y according to the height)
            ground.castShadow = true;
            ground.receiveShadow = true;
            groundGroup.add(ground);

            // Trees
            if(c == col("green", 0) || c == col("green", 1)) { // Only if the ground color is green
                if(Math.random() < treeProbability) {
                    var tree = drawTree();
                    tree.scale.set(size, size * scaleXZ, size); // Tree y-scaling is necessary to preserve the proportions (there will be terrain xz-scaling)
                    tree.position.set(i % resolution * size, height * size, Math.floor(i / resolution) * size);
                    treesGroup.add(tree);
                }
            }
        }

        terrain.add(groundGroup);
        terrain.add(treesGroup);

        terrain.position.set(-resolution * size / 2, 0, -resolution * size / 2); // Terrain centering
        terrain_scaleContainer.add(terrain);
        terrain_scaleContainer.scale.set(scaleXZ, 1, scaleXZ); // Width and height fixing for all the resolutions
    }

    return terrain_scaleContainer;
}
