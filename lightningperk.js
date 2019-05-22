var manager;

manager.on(events.PlayerJoinEvent, function(event){
    
    if(event.getPlayer().hasPermission("script.perk.lightning")){
        event.getPlayer().getWorld().strikeLightningEffect(event.getPlayer().getLocation());
    }
    
})