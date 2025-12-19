(()=>{
    const itemTexture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABOlJREFUeF7t3DFy3DAMBVB5JrUrH8EuXPgcvkkO5Zv4HC62cJr0qVJnJhk6kaPdpQSCBAmA+G5F7ZL4byFRu+ObBX+hK3ATevVY/AIAwREAAAAEr0Dw5aMDAEDwCgRfPjoAALAr8Js4A6jYJdU7gRsWFf66Eu7r6lUg+DtzgioNHwgcoSoFwA0fCJwgKAFQGz4QOEAwAkAqQ8n7OCjXfFMsCaa1A6ATGHYzEgA6gUEIowEAgTEEGgCAwBACLQBAYASBJgAgMICgBECaptROILfk0jkYKNd8U+AUHwjmy5/9gAYIJkPA6QDr0oFgIgQ1AHBPAAAfFUAnmABCbQfA5WCC8KX24egEjjG0dgB0AsfhS3UAIHCMQKoDAIFTBNIAsDtwBqEHACBwhKAXACBwgqAnACBwgKA3ACAwjmAEACAwjGAUACAwimAkACAwiGA0ACAwhkADQFcEzw9PHyV+fX/TWpuxiI+no1kk8W8R1/C3SwYEuwBEO0EufECgm5FmBxD7AokKf30jdINrEBYANEEoDR8I8t3AEgD2JYEbPhDY7gCsTlAbPhCcI7DWAYq6QGv4QPAfgUUAhwikwgeCvxWwCiCLQDp8ILAN4AxBr/CjI7DcAT5vCnuHHxmBBwDL88OT+GPjvWdk0R4WuQCQwgIC+rFuzQg3AICgJl76HFcAgIAOlDvCHQAg4EZ8PN4lACCQQ+AWABDIIHANAAjaEbgHAARtCKYAAAT1CKYBAAR1CKYCAAR8BNMBAAIegikBAEE5gmkBAEEZgqkBAAGNYHoAQDDpdwG07fMR+D1BvmIhOsC6dCC4RhAKAC4HALB8fXw8+33h919fuFcT1vjX97fL8aY+dKYmw6psxeDL8NNLKABIb2um7mYmUpEn65Rc+L0BZD792zmbqL2JSbCSrBi8F35PAET4y/3t3fLt5w/1+qtPoCJP1il74b+cTp9rl94dUOGnBSQA6U8bQUgA2/Clt4ic8LeStSCEA5ALXwpBbfiaEEIBOAq/FYFE+BoQwgCgwm/ZJUiHPxICAPyrdi2AnuGvEHreH4QBkIqZ6wJHW8Q0/miHMCL83ghCAbhEQIWfxu8BGBl+TwTTA0jFuwyauh/YXoMz5xY9h1j3+UWDGYOkLwchALQgqAHQK/wenSAMgFoEXAC9w5dGEAoAF0HuHuHldNpt2KPCl0QQDsBavG24pbuDzbir/1k0OnwpBGEB5LrB0b1YBsknAq3wJRCEBlCKYG/XcH97N+y/l1EbhdrdQXgAFAJqy+gdAQBQH62C454RAEBBwNQQSwDSXDmXAwCg0i087hUBABQGTA2zBqC0EwAAlSzjuEcEAMAImBpqEQDVCQCASpV53BsCAGAGTA23CmCvEwAAlWjFcYsI9raGAFARMHWKNQBHzwUAgEqz8rglBABQGWLLaVYAUE8F0QFaUibO1UZAhZ+mDwCTAigJHwA6hr++tEYXKA0fACYEwAkfAAYASG8xqgtwwweAiQDUhA8AgwD07gK14QPABABawgeAgQB6dIHW8AHAMQCJ8AFgMACpLiAVPgA4BCAZPgAoAGjpAtLhA4ASgBoEPcIHAEUAHAS9wgcABwB6hg8AxgH0Dh8AlAHsXQZGBL8uHT8IUUZw+U3hyPDRAZTDz3UAADAQSqQp4BIQKe3MWgEAAIJXIPjy/wBR9e+QguXVEAAAAABJRU5ErkJggg==";
    ModAPI.meta.title("Shotgun Mod");
    ModAPI.meta.version("v1.0");
    ModAPI.meta.icon(itemTexture);
    ModAPI.meta.description("Requires AsyncSink. Main code:radmanplayz Modifications+textures:Luke_gaming(Lukemelion on github)");

    function shotgunItem() {
        var recoilSpeed = 0; //recoil controller
        var DamageSourceClass = ModAPI.reflect.getClassByName("DamageSource");
        var creativeMiscTab = ModAPI.reflect.getClassById("net.minecraft.creativetab.CreativeTabs").staticVariables.tabMisc;
        var itemClass = ModAPI.reflect.getClassById("net.minecraft.item.Item");
        var itemSuper = ModAPI.reflect.getSuper(itemClass, (x) => x.length === 1);
        var nmi_Itemshotgun = function nmi_Itemshotgun() {
            itemSuper(this); //Use super function to get block properties on this class.
            this.$setCreativeTab(creativeMiscTab);
        }

        ModAPI.addEventListener("update", ()=>{ //recoil update loop (client)
            ModAPI.player.rotationPitch -= recoilSpeed;
            recoilSpeed *= 0.7;
        });

        function entityRayCast(player, world, range) {
            const HEADSHOT_MAX_DISTANCE_FROM_HEAD = 1.50;
            var eyePosition = player.getPositionEyes(0.0);
            var targetPosition = player.rayTrace(range, 0).hitVec;
            var entities = world.getEntitiesWithinAABBExcludingEntity(
                player.getRef(),
                player.getEntityBoundingBox().expand(range, range, range).getRef()
            ).getCorrective().array;
            var closestEntity = null;
            var isHeadshot = false;
            var closestDistance = range;

            // Iterate through all entities to find the one the player is looking at
            for (var i = 0; i < entities.length; i++) {
                if (!entities[i]) {
                    continue;
                }
                var entity = entities[i];

                // Check if the entity's bounding box intersects with the player's ray
                var entityBB = entity.getEntityBoundingBox().expand(0.3, 0.3, 0.3);
                var intercept = entityBB.calculateIntercept(eyePosition.getRef(), targetPosition.getRef());

                if (intercept != null) {
                    var distance = eyePosition.distanceTo(intercept.hitVec.getRef());
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestEntity = entity;
                        isHeadshot = entity.getPositionEyes(0.0).distanceTo(intercept.hitVec.getRef()) < HEADSHOT_MAX_DISTANCE_FROM_HEAD;
                    }
                }
            }

            var rayTraceResult = closestEntity;
            if (rayTraceResult != null){
                return {entity: rayTraceResult, headshot: isHeadshot};
            } else{
                return null;
            }
        }
        ModAPI.reflect.prototypeStack(itemClass, nmi_Itemshotgun);
        nmi_Itemshotgun.prototype.$onItemRightClick = function ($itemstack, $world, $player) {
            DamageSourceClass.staticMethods.$callClinit.method();
            //Noticed that the gun only worked after an entity in the world takes damage XD
            //TeaVM is very optimised. Using $callClinit tells it to hurry up pretty much lol
            var cactus = DamageSourceClass.staticVariables.cactus;
            var world = ModAPI.util.wrap($world);
            var entityplayer = ModAPI.util.wrap($player);
            var shotentitydata = entityRayCast(entityplayer, world, 16.0);
            if (shotentitydata != null){
                if (world.isRemote) {
                    recoilSpeed += 4;
                } else {
                    shotentitydata.entity.attackEntityFrom(cactus, 20 + (16 * shotentitydata.headshot));
                    if (shotentitydata.headshot) {
                        console.log("H E A D S H O T");
                    }
                    world.playSoundAtEntity(entityplayer.getRef(), ModAPI.util.str("tile.piston.out"), 1.0, 1.8);
                }
            } else if (!world.isRemote) {
                world.playSoundAtEntity(entityplayer.getRef(), ModAPI.util.str("random.click"), 1.0, 1.8);
            }
            return $itemstack;
        }

        function internal_reg() {
            var shotgun_item = (new nmi_Itemshotgun()).$setUnlocalizedName(
                ModAPI.util.str("shotgun")
            ).$setMaxStackSize(1);
            itemClass.staticMethods.registerItem.method(ModAPI.keygen.item("shotgun"), ModAPI.util.str("shotgun"), shotgun_item);
            ModAPI.items["shotgun"] = shotgun_item;
            
            return shotgun_item;
        }

        if (ModAPI.items) {
            return internal_reg();
        } else {
            ModAPI.addEventListener("bootstrap", internal_reg);
        }
    }

    ModAPI.dedicatedServer.appendCode(shotgunItem); 
    var shotgun_item = shotgunItem();

    ModAPI.addEventListener("lib:asyncsink", async () => {
        ModAPI.addEventListener("custom:asyncsink_reloaded", ()=>{
            ModAPI.mc.renderItem.registerItem(shotgun_item, ModAPI.util.str("shotgun"));
        });
        AsyncSink.L10N.set("item.shotgun.name", "shotgun");
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/models/item/shotgun.json", JSON.stringify(
            {
                "parent": "builtin/generated",
                "textures": {
                    "layer0": "items/shotgun"
                },
                "display": {
                    "thirdperson": {
                        "rotation": [ 5, 80, -45 ],
                        "translation": [ 0, 1, -3 ],
                        "scale": [ 1.0, 1.0, 1.0 ]
                    },
                    "firstperson": {
                        "rotation": [ 0, -135, 25 ],
                        "translation": [ 0, 4, 2 ],
                        "scale": [ 1.8, 1.8, 1.8 ]
                    }
                }
            }
        ));
        AsyncSink.setFile("resourcepacks/AsyncSinkLib/assets/minecraft/textures/items/shotgun.png", await (await fetch(
            itemTexture
        )).arrayBuffer());
    });
})();