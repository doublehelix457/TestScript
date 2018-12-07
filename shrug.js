var manager;
var player = Packages.org.bukkit.entity.Player;

manager.command("shrug",function(sender, args){
    if(sender instanceof player){
        sender.chat('\u00AF' + "\\_(" + '\u30C4' + ")_/" + '\u00AF');
    }
});
    
