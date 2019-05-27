var manager;
var logger;
var location = Packages.org.bukkit.Location;
var material = Packages.org.bukkit.Material;
var blockface = Packages.org.bukkit.block.BlockFace;
var color = Packages.org.bukkit.ChatColor;

var face = [blockface.UP, blockface.DOWN, blockface.NORTH, blockface.SOUTH, blockface.EAST, blockface.WEST];

manager.on(events.SignChangeEvent, function(event){
    if(event.getLine(1).contains("[MC1202]")){
        var loc = event.getBlock().getLocation();
        
        for (dx = -3; dx < 3; dx++) for (dy = -3; dy < 3; dy++) for (dz = -3; dz < 3; dz++) {
            var possibleChest = new location(loc.getWorld(), loc.getBlockX() + dx, loc.getBlockY() + dy, loc.getBlockZ() + dz);
             
            if(possibleChest.getBlock().getType() == material.CHEST || possibleChest.getBlock().getType() == material.TRAPPED_CHEST){
                for(x = 0;x<face.length;x++){
                    if(checkIfSign(possibleChest.getBlock().getRelative(face[x]).getType())){
                        var sign = possibleChest.getBlock().getRelative(face[x]).getState();
                        if(sign.getLine(0).contains("[Private]") && !sign.getLine(1).contains(event.getPlayer().getName())) {
                            event.getPlayer().sendMessage(color.RED + "You may not place a Dispenser IC on a chest that you don't own!");
                            event.setCancelled(true);
                            return;
                        }
                    }
                }
                
                for(z=0;z<face.length;z++){
                    if(possibleChest.getBlock().getRelative(face[z]).getType() == material.CHEST || possibleChest.getBlock().getRelative(face[z]).getType() == material.TRAPPED_CHEST){
                        for(y = 0;y<face.length;y++){
                            if(checkIfSign(possibleChest.getBlock().getRelative(face[z]).getRelative(face[y]).getType())){
                                var sign = possibleChest.getBlock().getRelative(face[z]).getRelative(face[y]).getState();
                                if(sign.getLine(0).contains("[Private]") && !sign.getLine(1).contains(event.getPlayer().getName())) {
                                    event.getPlayer().sendMessage(color.RED + "You may not place a Dispenser IC on a chest that you don't own!");
                                    event.setCancelled(true);
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
});

function checkIfSign(type){
    if(type == material.SIGN || type == material.WALL_SIGN) return true;
    return false;
}

//Save for update
/*function checkIfSign(type){
    if(type == material.ACACIA_WALL_SIGN || type == material.ACACIA_SIGN
    || type == material.BIRCH_WALL_SIGN || type == material.BIRCH_SIGN
    || type == material.DARK_OAK_WALL_SIGN || material.DARK_OAK_SIGN
    || type == material.JUNGLE_WALL_SIGN || type == material.JUNGLE_SIGN
    || type == material.OAK_WALL_SIGN || material.OAK_SIGN
    || type == material.SPRUCE_WALL_SIGN || material.SPRUCE_SIGN) return true;
    return false;
}*/