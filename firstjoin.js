var manager;
var location = Packages.org.bukkit.Location;

manager.on(events.PlayerJoinEvent, function(event){
    if(!event.getPlayer().hasPlayedBefore()){
        event.getPlayer().teleport(new location(event.getPlayer.getWorld(),120,41,2029));
    }
});