var manager;
var color = Packages.org.bukkit.ChatColor;

manager.on(events.SignChangeEvent, function(event){
    if(event.getLine(1).contains("[MC1214]")){
        if(event.getLine(2).contains("!")) {
            event.setCancelled(true);
            event.getPlayer().sendMessage(color.RED + "You are not allowed to use global coords on this sign!");
        }
        
        var str = event.getLine(2).substring(event.getLine(2).lastIndexOf("=") + 1).split(":");
        try {
            for(i=0;i<str.length;i++){
                if(parseInt(str[i]) > 15 || parseInt(str[i]) < -15){
                    event.setCancelled(true);
                    event.getPlayer().sendMessage(color.RED + "Maximum Offset can be only 15 in any direction.")
                    return;
                }
            }
        } catch(e) {
            
        }
    }
});