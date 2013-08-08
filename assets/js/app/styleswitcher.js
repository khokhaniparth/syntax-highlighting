$(function() { 

  // syntax highlight themes for prism: http://prismjs.com/ 
  $(".code-default").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism.css");
    return false;
  });

  $(".code-dark").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-dark.css"); 
    return false;
  });

  $(".code-funky").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-funky.css");
    return false;
  });

  $(".code-okaidia").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-okaidia.css");
    return false;
  });

  $(".code-twilight").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-twilight.css");
    return false;
  });

  $(".code-tomorrow").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-tomorrow.css");
    return false;
  });

  $(".code-tomorrow-night-bright").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-tomorrow-night-bright.css"); 
    return false;
  });

  $(".code-solarized-light").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-solarized-light.css");
    return false;
  }); 

  $(".code-solarized-dark").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-solarized-dark.css");
    return false;
  }); 

  $(".code-xonokai").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-xonokai.css");
    return false;
  });

  $(".code-monokai").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-monokai.css");
    return false;
  });

  $(".code-cbavota").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-cbavota.css");
    return false;
  }); 

  $(".code-pojoaque").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-pojoaque.css");
    return false;
  });
  $(".code-kermis-light").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-kermis-light.css");
    return false;
  }); 

  $(".code-kermis-dark").click(function(){
    $("#stylesheet--code").attr("href", "../assets/css/prism/prism-kermis-dark.css");
    return false;
  }); 
 
/* $(".code-rainbow").click(function(){
   $("#stylesheet--code").attr("href", "../assets/css/prism/prism-rainbow.css");
   return false;
 }); 
*/

   $(".styleswitch").click(function(){
     $(".styleswitch").removeClass("is-selected"); 
   $(this).toggleClass("is-selected");
  return false;
  }); 
}); 
