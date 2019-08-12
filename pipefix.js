var manager;
var logger;
var location = Packages.org.bukkit.Location;
var material = Packages.org.bukkit.Material;
var blockface = Packages.org.bukkit.block.BlockFace;
var color = Packages.org.bukkit.ChatColor;

var face = [blockface.UP, blockface.DOWN, blockface.NORTH, blockface.SOUTH, blockface.EAST, blockface.WEST];

manager.dependency("CraftBook");
manager.on("PipeSuckEvent", function(event, args){
    if(isContainer(event.getSucked().getType())){
        for(x = 0;x<face.length;x++){
            if(checkIfSign(event.getSucked().getRelative(face[x]).getType())){
                var sign = event.getSucked().getRelative(face[x]).getState();
                if(sign.getLine(0).contains("[Private]") && !sign.getLine(1).contains(event.getPlayer().getName())) {
                    event.setCancelled(true);
                    return;
                }
            }
        }
    }
    
    function checkIfSign(type){
    if(type == material.ACACIA_WALL_SIGN || type == material.ACACIA_SIGN
    || type == material.BIRCH_WALL_SIGN || type == material.BIRCH_SIGN
    || type == material.DARK_OAK_WALL_SIGN || material.DARK_OAK_SIGN
    || type == material.JUNGLE_WALL_SIGN || type == material.JUNGLE_SIGN
    || type == material.OAK_WALL_SIGN || material.OAK_SIGN
    || type == material.SPRUCE_WALL_SIGN || material.SPRUCE_SIGN) return true;
    return false;
}
    
    function isContainer(type){
        if(type == Material.CHEST 
        || type == Material.TRAPPED_CHEST
        || type == Material.FURNACE
        || type == Material.HOPPER
        || type == Material.DROPPER
        || type == Material.DISPENSER){
            return true;
        }
        return false;
    }
});