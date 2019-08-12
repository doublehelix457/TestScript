var manager;
var server;

manager.on("remplugin",function(sender,args){
    if(!server.getPluginManager().isPluginEnabled(args[0])){
        sender.sendMessage("No such plugin enabled!");
        return;
    };
    var filepath = server.getPluginManager().getPlugin(args[0]).getDataFolder().getPath() + '/' 
    + server.getPluginManager().getPlugin(args[0]).class.getProtectionDomain().getCodeSource().getLocation();
    sender.sendMessage(filepath);
    return;
    server.getPluginManager().disablePlugin(server.getPluginManager().getPlugin(args[0]));
    server.
    server.reload();
});