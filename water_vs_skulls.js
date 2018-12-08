var manager;

var material = Packages.org.bukkit.Material;

manager.on(events.BlockFromToEvent, function(event){
    if(event.getToBlock().getType() == material.PLAYER_HEAD || event.getToBlock().getType() == material.PLAYER_WALL_HEAD){
        event.setCancelled(true);     
    }
});
    