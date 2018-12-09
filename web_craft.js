var server;
var plugin;

var material = Packages.org.bukkit.Material;
var recipe = Packages.org.bukkit.inventory.ShapedRecipe;
var key = Packages.org.bukkit.NamespacedKey;
var istack = Packages.org.bukkit.inventory.ItemStack;
var ShapedRecipe = Packages.org.bukkit.inventory.ShapedRecipe;

var cobweb = new ShapedRecipe(new key(plugin,"cobwebcraft"),new istack(material.COBWEB));
cobweb.shape("* *"," * ","* *");
cobweb.setIngredient("*",material.STRING);

server.addRecipe(cobweb);

