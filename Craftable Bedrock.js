(function EFB2Mod() {
    const $$scoped_efb_globals = {};

        function EFB2__defineFixupGlobal() {
            globalThis.efb2__fixupBlockIds = function efb2__fixupBlockIds() {
                var blockRegistry = ModAPI.util.wrap(ModAPI.reflect.getClassById("net.minecraft.block.Block").staticVariables.blockRegistry).getCorrective();
                var BLOCK_STATE_IDS = ModAPI.util.wrap(ModAPI.reflect.getClassById("net.minecraft.block.Block").staticVariables.BLOCK_STATE_IDS).getCorrective();
                blockRegistry.registryObjects.hashTableKToV.forEach(entry => {
                    if (entry) {
                        var block = entry.value;
                        var validStates = block.getBlockState().getValidStates();
                        var stateArray = validStates.array || [validStates.element];
                        stateArray.forEach(iblockstate => {
                            var i = blockRegistry.getIDForObject(block.getRef()) << 4 | block.getMetaFromState(iblockstate.getRef());
                            BLOCK_STATE_IDS.put(iblockstate.getRef(), i);
                        });
                    }
                });
            }
        }
        ModAPI.dedicatedServer.appendCode(EFB2__defineFixupGlobal);
        EFB2__defineFixupGlobal();
    
        function EFB2__defineStr2Ab() {
            globalThis.efb2__str2ab = function efb2__str2ab(str) {
                var buf = new ArrayBuffer(str.length);
                var bufView = new Uint8Array(buf);
                for (var i = 0, strLen = str.length; i < strLen; i++) {
                    bufView[i] = str.charCodeAt(i);
                }
                return buf;
            }
        }
        ModAPI.dedicatedServer.appendCode(EFB2__defineStr2Ab);
        EFB2__defineStr2Ab();
    

(function MetadataDatablock() {
    ModAPI.meta.title("Craftable Bedrock");
    ModAPI.meta.version("v1.0");
    ModAPI.meta.description("You can now craft Bedrock! [Look on the Discord for the recipe]");
    ModAPI.meta.credits("By _iamOutrageous");
})();
(function IconDatablock() {
    ModAPI.meta.icon("data:image/png;base64,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");
})();(function AdvancedBlockDatablock() {
    const $$blockTexture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAAXNSR0IArs4c6QAABxlJREFUeF7tnTFv6zgQBuUqQZoA/k3pUqb2/+8CuAmS6h3iK036RvqWos9vUq92xeFwKUuRfTidTn+WO/77+vpCZ/f9/Y3iaNDz8zMKpXV/fn5QvqenJxRHg+g4aL7quIMCtpHSiVPATEkF7PBTwEwserQCKiB1ZUicAirgELFoUgVUQOrKkDgFVMAhYtGkCqiA1JUhcQqogEPEokkVUAGpK0PiDh8fH6VPQuiN2er7bDTfEIoTkp7P59Kq9AkM5Uw9UMDSadwvmQJ2WFPzq1cSzbefImMrKaACjjXsP7IroAIq4A0CdCf0GnCqRtuL2wHtgNvtKThSARWwQKPtKRRQAbfbU3CkAipggUbbU/x1AtJPNfTdB4qe3qGn+WgcHces83uU+574U7ACttVVQLqk23EK2OFnB8zEokcroAJSV4bEKaACDhGLJlVABaSuDIlTQAUcIhZNqoAKSF0ZEqeACjhELJpUARWQujIkDgtIq7+8vNBQFEe/HYvWpfnQyS3LQuvSfNXnR+vSBw00H41TQEqqE6eAGUAFzPjZAUN+ChgCtANmABUw42cHDPkpYAjQDpgBVMCMnx0w5KeAIUA7YAZQATN+dsCQnwKGAO2AGcDD+/s7+nas6ncQZt15p+Og50fzVYuaTfv10Z+fnyglHS9KtiyLAnZIKWAbjALSpdWJowAVUAFD1TKACpjxo5PnFuwWfCHgNSBdMmGcW3AboAKGYtHDFVABLwToNRYVi8YpoAIqIF0tO8a5Be8E2w54Zx2Q/k4IvZM/652GnfzdXKb6kqP6u2uq8x2PR8QKPwtWQMSzG6SAbTQKmHmFj1ZABcSyjAhUQAUc4RXOqYAKiGUZEaiACjjCK5xTARUQyzIiUAEVcIRXOKcCKiCWZUSgAnYEnPVOCL2xXS0DfeZJ7+TT86N1aT4aRx890nzVcdP+IVUBq6eynU8BO5wVUAF/CdgBOx64Be+zQBRQAfcxrVNFARVQAfckQD+NugXvMyt2QDvgPqa5Bf9LwA441ber4nZAO+BUI7GA9CzpuwU0H/1BaFqX5qPnV32jt/qR3axx0LoKSEl14hQwA6iAGb9FATOACpjxU8CQnwKGAO2AGUAFzPjZAUN+ChgCtANmABUw42cHDPkpYAjQDpgBVMCMnx0w5Hc4nU7od0LCOleH02/Rov85TfPRcdC6NB+Nqx4HrVsdR5/oKGCHvAJmSipgxq/8N+Do6dgBKakwjoKmnYjmo6dN69J8NK56HLRudZwdMCSqgBlABcz4uQWH/BQwBGgHzAAqYMbPDhjyU8AQoB0wA6iAGT87YMgPC0h/J4SeD+0cs2430POj46Vx1eOdNY7q8eKfaaCFKZjqCak+P5qPxlWPl3Km51cdR8ergNXkO/nohNDTUcAOKQqmekLufeKqx0s5Uy7VcXS8dsBq8nbACwEFDDt0tZd0QmhdO2A4wdUTcu8TVz1eBVRA6vyqLYkmVUAFpK4o4A1SfghZpdH2YLfgNrvD29sbeifk9fUV0aePYOjbZDQfOrllWei3aNF89Nu2qsdL89FxVHOmdRWQkurEKWAGUAEzfosCZgAVMOOngCE/BQwB2gEzgAqY8bMDhvwUMARoB8wAKmDGzw4Y8lPAEKAdMAOogBk/O2DIr/xRXHg+mw+vfjhf/ehs88DCA2dxoXUVsDPBCtgGQ7koYNg5KOiwzPDDqQj0RCgXWtcOaAek7l3iFLCDi644SpuCpvlmxc3iQuvaAe2Aq9YGXZgKuArrdTAFHZYZfjgVgZ4I5ULr2gHtgNQ9rwFvkaIrjtKmK53mmxU3iwutawe0A65aG3Rhlgs4650B+u4DHTAFWD1eOg5qw/l8pqEojj7Tpu/U0Hy4A1ZPCKKyLPiXiBSQEm3HUWEUMLwPaAdUwFVLlW5ddsBVWK+C7YAdfgrYBuM1YLbg8NEKqIAXAn4IwWumGUgXEq1iB6Skwjg6cV4DZqC9BvQacJVBdsBVuLYH2wEf/Bqw+hfTH+U+271f89IlPWscx+MRnWL5L6YrIOLeDaIdn1ZRwA6pajCPMnGPMg47IG0ROy0QejoKSEl14tyCM4AKmPHDb025BbdBK6AC/i+e/NBpql7otK7XgJSU14AhqfbhChhindU53ILDifNDSAbwrxOQ/mJ6dUeoBp1N++MeTf9JYxaBae+EKOA+U66AHc4KqIC/BOyA+3gwrYod0A44Tb7fwgqogAp4g4Bb8FQ9xhe3A9oBx1t2o4ICKqACugVPdWBq8YfpgFMpFhaf9USnWgT6yJOio1yq79/iDyF0IPceR0HTcdAJUcA2UQWkpoXXsgqogBcCdsC2CJQL7fh0XdsBKSk74IWAAobC0JVOy9AJcQt2C3YLvrGq6MKkC44uYLdgSsot2C04dMUOaAesUCjLQbcaWoVuSV4Dton+A3YNkAq7CL4oAAAAAElFTkSuQmCC";

    function $$ServersideBlocks() {
        const $$scoped_efb_globals = {};
        var $$itemClass = ModAPI.reflect.getClassById("net.minecraft.item.Item");
        var $$blockClass = ModAPI.reflect.getClassById("net.minecraft.block.Block");
        var $$iproperty = ModAPI.reflect.getClassById("net.minecraft.block.properties.IProperty").class;
        var $$makeBlockState = ModAPI.reflect.getClassById("net.minecraft.block.state.BlockState").constructors.find(x => x.length === 2);
        var $$blockSuper = ModAPI.reflect.getSuper($$blockClass, (x) => x.length === 2);

        var $$breakBlockMethod = $$blockClass.methods.breakBlock.method;
        var $$onBlockAddedMethod = $$blockClass.methods.onBlockAdded.method;
        var $$onNeighborBlockChangeMethod = $$blockClass.methods.onNeighborBlockChange.method;
        var $$onBlockDestroyedByPlayerMethod = $$blockClass.methods.onBlockDestroyedByPlayer.method;
        var $$randomTickMethod = $$blockClass.methods.randomTick.method;
        var $$entityCollisionMethod = $$blockClass.methods.onEntityCollidedWithBlock.method;
        var $$getDroppedItem = $$blockClass.methods.getItemDropped.method;
        var $$quantityDropped = $$blockClass.methods.quantityDropped.method;

        var $$nmb_AdvancedBlock = function $$nmb_AdvancedBlock() {
            $$blockSuper(this, ModAPI.materials.rock.getRef());
            this.$defaultBlockState = this.$blockState.$getBaseState();
              this.$setBlockBounds(0, 0, 0, 1, 1, 1);this["$fullBlock"] = 1;this.$setCreativeTab(ModAPI.reflect.getClassById("net.minecraft.creativetab.CreativeTabs").staticVariables.tabMaterials);;
        }
        ModAPI.reflect.prototypeStack($$blockClass, $$nmb_AdvancedBlock);
        $$nmb_AdvancedBlock.prototype.$isOpaqueCube = function () {
            return 1;
        }
        $$nmb_AdvancedBlock.prototype.$createBlockState = function () {
            return $$makeBlockState(this, ModAPI.array.object($$iproperty, 0));
        }
        $$nmb_AdvancedBlock.prototype.$breakBlock = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$breakBlockMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockAdded = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockAddedMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onNeighborBlockChange = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onNeighborBlockChangeMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockDestroyedByPlayer = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockDestroyedByPlayerMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$randomTick = function ($$world, $$blockpos, $$blockstate, $$random) {
            ;
            return $$randomTickMethod(this, $$world, $$blockpos, $$blockstate, $$random);
        }
        $$nmb_AdvancedBlock.prototype.$tickRate = function () {
            return 10;
        }
        $$nmb_AdvancedBlock.prototype.$onEntityCollidedWithBlock = function ($$world, $$blockpos, $$entity) {
            ;
            return $$entityCollisionMethod(this, $$world, $$blockpos, $$entity);
        }
        $$nmb_AdvancedBlock.prototype.$getItemDropped = function ($$blockstate, $$random, $$forture) {
            ;
            return $$getDroppedItem(this, $$blockstate, $$random, $$forture);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDropped = function ($$random, $$fortune) {
            $$random ||= 0;
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDroppedWithBonus = function ($$random, $$fortune) {
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }

        function $$internal_reg() {
            var $$cblock = (new $$nmb_AdvancedBlock()).$setUnlocalizedName(
                ModAPI.util.str("compressed_stone")
            );
            $$blockClass.staticMethods.registerBlock0.method(
                ModAPI.keygen.block("compressed_stone"),
                ModAPI.util.str("compressed_stone"),
                $$cblock
            );
            $$itemClass.staticMethods.registerItemBlock0.method($$cblock);
            efb2__fixupBlockIds();
            ModAPI.blocks["compressed_stone"] = $$cblock;
            
            return $$cblock;
        }

        if (ModAPI.materials) {
            return $$internal_reg();
        } else {
            ModAPI.addEventListener("bootstrap", $$internal_reg);
        }
    }
    ModAPI.dedicatedServer.appendCode($$ServersideBlocks);
    var $$cblock = $$ServersideBlocks();
    ModAPI.addEventListener("lib:asyncsink", async () => {
        ModAPI.addEventListener("lib:asyncsink:registeritems", ($$renderItem)=>{
            $$renderItem.registerBlock($$cblock, ModAPI.util.str("compressed_stone"));
        });
        AsyncSink.L10N.set("tile.compressed_stone.name", "Compressed Stone");
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/block/compressed_stone.json", JSON.stringify(
            {
                "parent": "block/cube_all",
                "textures": {
                    "all": "blocks/compressed_stone"
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/item/compressed_stone.json", JSON.stringify(
            {
                "parent": "block/compressed_stone",
                "display": {
                    "thirdperson": {
                        "rotation": [10, -45, 170],
                        "translation": [0, 1.5, -2.75],
                        "scale": [0.375, 0.375, 0.375]
                    }
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/blockstates/compressed_stone.json", JSON.stringify(
            {
                "variants": {
                    "normal": [
                        { "model": "compressed_stone" },
                    ]
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/textures/blocks/compressed_stone.png", await (await fetch(
            $$blockTexture
        )).arrayBuffer());
        
    });
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/compressed_stone@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "stone",
                meta: 0
            },
            };
            var $$recipePattern = [
                "AAA","AAA","AAA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),1,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 1));
            
            (function ($$itemstack) {})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function AdvancedBlockDatablock() {
    const $$blockTexture = "data:image/png;base64,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";

    function $$ServersideBlocks() {
        const $$scoped_efb_globals = {};
        var $$itemClass = ModAPI.reflect.getClassById("net.minecraft.item.Item");
        var $$blockClass = ModAPI.reflect.getClassById("net.minecraft.block.Block");
        var $$iproperty = ModAPI.reflect.getClassById("net.minecraft.block.properties.IProperty").class;
        var $$makeBlockState = ModAPI.reflect.getClassById("net.minecraft.block.state.BlockState").constructors.find(x => x.length === 2);
        var $$blockSuper = ModAPI.reflect.getSuper($$blockClass, (x) => x.length === 2);

        var $$breakBlockMethod = $$blockClass.methods.breakBlock.method;
        var $$onBlockAddedMethod = $$blockClass.methods.onBlockAdded.method;
        var $$onNeighborBlockChangeMethod = $$blockClass.methods.onNeighborBlockChange.method;
        var $$onBlockDestroyedByPlayerMethod = $$blockClass.methods.onBlockDestroyedByPlayer.method;
        var $$randomTickMethod = $$blockClass.methods.randomTick.method;
        var $$entityCollisionMethod = $$blockClass.methods.onEntityCollidedWithBlock.method;
        var $$getDroppedItem = $$blockClass.methods.getItemDropped.method;
        var $$quantityDropped = $$blockClass.methods.quantityDropped.method;

        var $$nmb_AdvancedBlock = function $$nmb_AdvancedBlock() {
            $$blockSuper(this, ModAPI.materials.rock.getRef());
            this.$defaultBlockState = this.$blockState.$getBaseState();
              this.$setBlockBounds(0, 0, 0, 1, 1, 1);this["$fullBlock"] = 1;this.$setCreativeTab(ModAPI.reflect.getClassById("net.minecraft.creativetab.CreativeTabs").staticVariables.tabMaterials);;
        }
        ModAPI.reflect.prototypeStack($$blockClass, $$nmb_AdvancedBlock);
        $$nmb_AdvancedBlock.prototype.$isOpaqueCube = function () {
            return 1;
        }
        $$nmb_AdvancedBlock.prototype.$createBlockState = function () {
            return $$makeBlockState(this, ModAPI.array.object($$iproperty, 0));
        }
        $$nmb_AdvancedBlock.prototype.$breakBlock = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$breakBlockMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockAdded = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockAddedMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onNeighborBlockChange = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onNeighborBlockChangeMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockDestroyedByPlayer = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockDestroyedByPlayerMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$randomTick = function ($$world, $$blockpos, $$blockstate, $$random) {
            ;
            return $$randomTickMethod(this, $$world, $$blockpos, $$blockstate, $$random);
        }
        $$nmb_AdvancedBlock.prototype.$tickRate = function () {
            return 10;
        }
        $$nmb_AdvancedBlock.prototype.$onEntityCollidedWithBlock = function ($$world, $$blockpos, $$entity) {
            ;
            return $$entityCollisionMethod(this, $$world, $$blockpos, $$entity);
        }
        $$nmb_AdvancedBlock.prototype.$getItemDropped = function ($$blockstate, $$random, $$forture) {
            ;
            return $$getDroppedItem(this, $$blockstate, $$random, $$forture);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDropped = function ($$random, $$fortune) {
            $$random ||= 0;
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDroppedWithBonus = function ($$random, $$fortune) {
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }

        function $$internal_reg() {
            var $$cblock = (new $$nmb_AdvancedBlock()).$setUnlocalizedName(
                ModAPI.util.str("double_compressed_stone")
            );
            $$blockClass.staticMethods.registerBlock0.method(
                ModAPI.keygen.block("double_compressed_stone"),
                ModAPI.util.str("double_compressed_stone"),
                $$cblock
            );
            $$itemClass.staticMethods.registerItemBlock0.method($$cblock);
            efb2__fixupBlockIds();
            ModAPI.blocks["double_compressed_stone"] = $$cblock;
            
            return $$cblock;
        }

        if (ModAPI.materials) {
            return $$internal_reg();
        } else {
            ModAPI.addEventListener("bootstrap", $$internal_reg);
        }
    }
    ModAPI.dedicatedServer.appendCode($$ServersideBlocks);
    var $$cblock = $$ServersideBlocks();
    ModAPI.addEventListener("lib:asyncsink", async () => {
        ModAPI.addEventListener("lib:asyncsink:registeritems", ($$renderItem)=>{
            $$renderItem.registerBlock($$cblock, ModAPI.util.str("double_compressed_stone"));
        });
        AsyncSink.L10N.set("tile.double_compressed_stone.name", "Double Compressed Stone");
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/block/double_compressed_stone.json", JSON.stringify(
            {
                "parent": "block/cube_all",
                "textures": {
                    "all": "blocks/double_compressed_stone"
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/item/double_compressed_stone.json", JSON.stringify(
            {
                "parent": "block/double_compressed_stone",
                "display": {
                    "thirdperson": {
                        "rotation": [10, -45, 170],
                        "translation": [0, 1.5, -2.75],
                        "scale": [0.375, 0.375, 0.375]
                    }
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/blockstates/double_compressed_stone.json", JSON.stringify(
            {
                "variants": {
                    "normal": [
                        { "model": "double_compressed_stone" },
                    ]
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/textures/blocks/double_compressed_stone.png", await (await fetch(
            $$blockTexture
        )).arrayBuffer());
        
    });
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/double_compressed_stone@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "compressed_stone",
                meta: 0
            },
            };
            var $$recipePattern = [
                "AAA","AAA","AAA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),1,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 1));
            
            (function ($$itemstack) {})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function AdvancedBlockDatablock() {
    const $$blockTexture = "data:image/png;base64,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";

    function $$ServersideBlocks() {
        const $$scoped_efb_globals = {};
        var $$itemClass = ModAPI.reflect.getClassById("net.minecraft.item.Item");
        var $$blockClass = ModAPI.reflect.getClassById("net.minecraft.block.Block");
        var $$iproperty = ModAPI.reflect.getClassById("net.minecraft.block.properties.IProperty").class;
        var $$makeBlockState = ModAPI.reflect.getClassById("net.minecraft.block.state.BlockState").constructors.find(x => x.length === 2);
        var $$blockSuper = ModAPI.reflect.getSuper($$blockClass, (x) => x.length === 2);

        var $$breakBlockMethod = $$blockClass.methods.breakBlock.method;
        var $$onBlockAddedMethod = $$blockClass.methods.onBlockAdded.method;
        var $$onNeighborBlockChangeMethod = $$blockClass.methods.onNeighborBlockChange.method;
        var $$onBlockDestroyedByPlayerMethod = $$blockClass.methods.onBlockDestroyedByPlayer.method;
        var $$randomTickMethod = $$blockClass.methods.randomTick.method;
        var $$entityCollisionMethod = $$blockClass.methods.onEntityCollidedWithBlock.method;
        var $$getDroppedItem = $$blockClass.methods.getItemDropped.method;
        var $$quantityDropped = $$blockClass.methods.quantityDropped.method;

        var $$nmb_AdvancedBlock = function $$nmb_AdvancedBlock() {
            $$blockSuper(this, ModAPI.materials.rock.getRef());
            this.$defaultBlockState = this.$blockState.$getBaseState();
            ;
        }
        ModAPI.reflect.prototypeStack($$blockClass, $$nmb_AdvancedBlock);
        $$nmb_AdvancedBlock.prototype.$isOpaqueCube = function () {
            return 1;
        }
        $$nmb_AdvancedBlock.prototype.$createBlockState = function () {
            return $$makeBlockState(this, ModAPI.array.object($$iproperty, 0));
        }
        $$nmb_AdvancedBlock.prototype.$breakBlock = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$breakBlockMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockAdded = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockAddedMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onNeighborBlockChange = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onNeighborBlockChangeMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$onBlockDestroyedByPlayer = function ($$world, $$blockpos, $$blockstate) {
            ;
            return $$onBlockDestroyedByPlayerMethod(this, $$world, $$blockpos, $$blockstate);
        }
        $$nmb_AdvancedBlock.prototype.$randomTick = function ($$world, $$blockpos, $$blockstate, $$random) {
            ;
            return $$randomTickMethod(this, $$world, $$blockpos, $$blockstate, $$random);
        }
        $$nmb_AdvancedBlock.prototype.$tickRate = function () {
            return 10;
        }
        $$nmb_AdvancedBlock.prototype.$onEntityCollidedWithBlock = function ($$world, $$blockpos, $$entity) {
            ;
            return $$entityCollisionMethod(this, $$world, $$blockpos, $$entity);
        }
        $$nmb_AdvancedBlock.prototype.$getItemDropped = function ($$blockstate, $$random, $$forture) {
            ;
            return $$getDroppedItem(this, $$blockstate, $$random, $$forture);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDropped = function ($$random, $$fortune) {
            $$random ||= 0;
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }
        $$nmb_AdvancedBlock.prototype.$quantityDroppedWithBonus = function ($$random, $$fortune) {
            ;
            return $$quantityDropped(this, $$random, $$fortune);
        }

        function $$internal_reg() {
            var $$cblock = (new $$nmb_AdvancedBlock()).$setUnlocalizedName(
                ModAPI.util.str("triple_compressed_stone")
            );
            $$blockClass.staticMethods.registerBlock0.method(
                ModAPI.keygen.block("triple_compressed_stone"),
                ModAPI.util.str("triple_compressed_stone"),
                $$cblock
            );
            $$itemClass.staticMethods.registerItemBlock0.method($$cblock);
            efb2__fixupBlockIds();
            ModAPI.blocks["triple_compressed_stone"] = $$cblock;
            
            return $$cblock;
        }

        if (ModAPI.materials) {
            return $$internal_reg();
        } else {
            ModAPI.addEventListener("bootstrap", $$internal_reg);
        }
    }
    ModAPI.dedicatedServer.appendCode($$ServersideBlocks);
    var $$cblock = $$ServersideBlocks();
    ModAPI.addEventListener("lib:asyncsink", async () => {
        ModAPI.addEventListener("lib:asyncsink:registeritems", ($$renderItem)=>{
            $$renderItem.registerBlock($$cblock, ModAPI.util.str("triple_compressed_stone"));
        });
        AsyncSink.L10N.set("tile.triple_compressed_stone.name", "Triple Compressed Stone");
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/block/triple_compressed_stone.json", JSON.stringify(
            {
                "parent": "block/cube_all",
                "textures": {
                    "all": "blocks/triple_compressed_stone"
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/item/triple_compressed_stone.json", JSON.stringify(
            {
                "parent": "block/triple_compressed_stone",
                "display": {
                    "thirdperson": {
                        "rotation": [10, -45, 170],
                        "translation": [0, 1.5, -2.75],
                        "scale": [0.375, 0.375, 0.375]
                    }
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/blockstates/triple_compressed_stone.json", JSON.stringify(
            {
                "variants": {
                    "normal": [
                        { "model": "triple_compressed_stone" },
                    ]
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/textures/blocks/triple_compressed_stone.png", await (await fetch(
            $$blockTexture
        )).arrayBuffer());
        
    });
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/triple_compressed_stone@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "double_compressed_stone",
                meta: 0
            },
            };
            var $$recipePattern = [
                "AAA","AAA","AAA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),1,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 1));
            
            (function ($$itemstack) {})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();(function CraftingRecipeDatablock() {
    function $$registerRecipe() {
        function $$internalRegister() {
            const $$scoped_efb_globals = {};
            var $$ObjectClass = ModAPI.reflect.getClassById("java.lang.Object").class;
            function $$ToChar(char) {
                return ModAPI.reflect.getClassById("java.lang.Character").staticMethods.valueOf.method(char[0].charCodeAt(0));
            }
            var $$resultItemArg = "block/bedrock@0";
            var $$recipeLegend = {
                "A": {
                type: "block",
                id: "triple_compressed_stone",
                meta: 0
            },
            };
            var $$recipePattern = [
                "AAA","AAA","AAA",
            ];
            var $$itemStackFromBlockWithMeta = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[2];
            var $$itemStackFromItem = ModAPI.reflect.getClassById("net.minecraft.item.ItemStack").constructors[4];
            var $$recipeInternal = [];
            Object.keys($$recipeLegend).forEach(($$key) => {
                $$recipeInternal.push($$ToChar($$key));
                var $$ingredient = ($$recipeLegend[$$key].type === "block" ? $$itemStackFromBlockWithMeta(ModAPI.blocks[$$recipeLegend[$$key].id].getRef(),1,$$recipeLegend[$$key].meta) : ModAPI.items[$$recipeLegend[$$key].id].getRef());
                $$recipeInternal.push($$ingredient);
            });

            var $$recipeContents = $$recipePattern.map(row => ModAPI.util.str(row));
            var $$recipe = ModAPI.util.makeArray($$ObjectClass, $$recipeContents.concat($$recipeInternal));

            var $$resultItem = $$resultItemArg.startsWith("block/") ?
                ($$itemStackFromBlockWithMeta(ModAPI.blocks[$$resultItemArg.replace("block/", "").split("@")[0]].getRef(),1,$$resultItemArg.replace("block/", "").split("@")[1] || 0))
                : ($$itemStackFromItem(ModAPI.items[$$resultItemArg.replace("item/", "")].getRef(), 1));
            
            (function ($$itemstack) {})($$resultItem);
            
            var $$craftingManager = ModAPI.reflect.getClassById("net.minecraft.item.crafting.CraftingManager").staticMethods.getInstance.method();
            ModAPI.hooks.methods.nmic_CraftingManager_addRecipe($$craftingManager, $$resultItem, $$recipe);
            
        }

        if (ModAPI.items) {
            $$internalRegister();
        } else {
            ModAPI.addEventListener("bootstrap", $$internalRegister);
        }
    }
    ModAPI.dedicatedServer.appendCode($$registerRecipe);
    $$registerRecipe();
})();
})();
