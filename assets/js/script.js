switch (true) {
  case $("#products").click():
  console.log("products");
  break;
  case $("#services").click():
  console.log("services");
  break;
  case $("#software").click():
  console.log("software");
  break;
  case $("#repair").click():
  console.log("repair");
  break;
  case $("#sales").click():
  console.log("sales");
  break;
}
$(function(){
  $(".btnPanier").click(function(){
    var nmbrProduit1 = $("#mouseSmile option:selected").val();
    var nmbrProduit2 = $("#mouseCry option:selected").val();
    var nmbrProduit3 = $("#mouseSDuck option:selected").val();
    var nmbrProduit4 = $("#zeroFlouz option:selected").val();
    var nmbrProduit5 = $("#flouz option:selected").val();
    var nmbrProduit6 = $("#bigFlouz option:selected").val();
    var nmbrProduit7 = $("#MWS option:selected").val();
    var nmbrProduit8 = $("#aI option:selected").val();
    var nmbrProduit9 = $("#rI option:selected").val();
    var nmbrProduit10 = $("#dO option:selected").val();
    var nmbrProduit11 = $("#ACC option:selected").val();

    var produit1 = nmbrProduit1 * 10;
    var produit2 = nmbrProduit2 * 20;
    var produit3 = nmbrProduit3 * 50;
    var produit4 = nmbrProduit4 * 5;
    var produit5 = nmbrProduit5 * 1000;
    var produit6 = nmbrProduit6 * 5000;
    var produit7 = nmbrProduit7 * 50000;
    var produit8 = nmbrProduit8 * 100000;
    var produit9 = nmbrProduit9 * 110000;
    var produit10 = nmbrProduit10 * 140000;
    var produit11 = nmbrProduit11 * 100000;

    var total = produit1 + produit2 + produit3 + produit4 + produit5 + produit6 + produit7 + produit8 + produit9 + produit10 + produit11;

    if (produit1 == 0) {
      $("#displayProduit1").hide();
    } else {
      $("#displayProduit1").show();
      $("#produitPanier1").val(nmbrProduit1);
      $("#sousTotal1").val(produit1)
    }
    if (produit2 == 0) {
      $("#displayProduit2").hide();
    } else {
      $("#displayProduit2").show();
      $("#produitPanier2").val(nmbrProduit2);
      $("#sousTotal2").val(produit2)
    }
    if (produit3 == 0) {
      $("#displayProduit3").hide();
    } else {
      $("#displayProduit3").show();
      $("#produitPanier3").val(nmbrProduit3);
      $("#sousTotal3").val(produit3)
    }
    if (produit4 == 0) {
      $("#displayProduit4").hide();
    } else {
      $("#displayProduit4").show();
      $("#produitPanier4").val(nmbrProduit4);
      $("#sousTotal4").val(produit4)
    }
    if (produit5 == 0) {
      $("#displayProduit5").hide();
    } else {
      $("#displayProduit5").show();
      $("#produitPanier5").val(nmbrProduit5);
      $("#sousTotal5").val(produit5)
    }
    if (produit6 == 0) {
      $("#displayProduit6").hide();
    } else {
      $("#displayProduit6").show();
      $("#produitPanier6").val(nmbrProduit6);
      $("#sousTotal6").val(produit6)
    }
    if (produit7 == 0) {
      $("#displayProduit7").hide();
    } else {
      $("#displayProduit7").show();
      $("#produitPanier7").val(nmbrProduit7);
      $("#sousTotal7").val(produit7)
    }
    if (produit8 == 0) {
      $("#displayProduit8").hide();
    } else {
      $("#displayProduit8").show();
      $("#produitPanier8").val(nmbrProduit8);
      $("#sousTotal8").val(produit8)
    }
    if (produit9 == 0) {
      $("#displayProduit9").hide();
    } else {
      $("#displayProduit9").show();
      $("#produitPanier9").val(nmbrProduit9);
      $("#sousTotal9").val(produit9)
    }
    if (produit10 == 0) {
      $("#displayProduit10").hide();
    } else {
      $("#displayProduit10").show();
      $("#produitPanier10").val(nmbrProduit10);
      $("#sousTotal10").val(produit10)
    }
    if (produit11 == 0) {
      $("#displayProduit11").hide();
    } else {
      $("#displayProduit11").show();
      $("#produitPanier11").val(nmbrProduit11);
      $("#sousTotal11").val(produit11)
    }
    $("#maintenantFautRaquer").val(total);
    //début des incrémentations/décrémentations
    $("#moins1").click(function(){
      if (nmbrProduit1 >= 2){
      nmbrProduit1 --;
      $("#produitPanier1").val(nmbrProduit1);
      total = total - 10;
      $("#maintenantFautRaquer").val(total);
      produit1 = produit1 - 10;
      $("#sousTotal1").val(produit1);
    } else {
      total = total - 10;
      $("#maintenantFautRaquer").val(total);
      $("#displayProduit1").hide();
    }
    })
    $("#moins2").click(function(){
      if (nmbrProduit2 >= 2){
        nmbrProduit2 --;
        $("#produitPanier2").val(nmbrProduit2);
        total = total - 20;
        $("#maintenantFautRaquer").val(total);
        produit2 = produit2 - 20;
        $("#sousTotal2").val(produit2);
      } else {
        total = total - 20;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit2").hide();
      }
    })
    $("#moins3").click(function(){
      if (nmbrProduit3 >= 2){
        nmbrProduit3 --;
        $("#produitPanier3").val(nmbrProduit3);
        total = total - 50;
        $("#maintenantFautRaquer").val(total);
        produit3 = produit3 - 50;
        $("#sousTotal3").val(produit3);
      } else {
         total = total - 50;
         $("#maintenantFautRaquer").val(total);
         $("#displayProduit3").hide();
      }
    })
    $("#moins4").click(function(){
      if (nmbrProduit4 >= 2){
        nmbrProduit4 --;
        $("#produitPanier4").val(nmbrProduit4);
        total = total - 5;
        $("#maintenantFautRaquer").val(total);
        produit4 = produit4 - 5;
        $("#sousTotal4").val(produit4);
      } else {
        total = total - 5;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit4").hide();
      }
    })
    $("#moins5").click(function(){
      if (nmbrProduit5 >= 2){
        nmbrProduit5 --;
        $("#produitPanier5").val(nmbrProduit5);
        total = total - 1000;
        $("#maintenantFautRaquer").val(total);
        produit5 = produit5 - 1000;
        $("#sousTotal5").val(produit5);
      } else {
        total = total - 1000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit6").hide();
      }
    })
    $("#moins6").click(function(){
      if (nmbrProduit6 >= 2){
        nmbrProduit6 --;
        $("#produitPanier6").val(nmbrProduit6);
        total = total - 5000;
        $("#maintenantFautRaquer").val(total);
        produit6 = produit6 - 5000;
        $("#sousTotal6").val(produit6);
      } else {
        total = total - 5000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit6").hide();
      }
    })
    $("#moins7").click(function(){
      if (nmbrProduit7 >= 2){
        nmbrProduit7 --;
        $("#produitPanier7").val(nmbrProduit7);
        total = total - 50000;
        $("#maintenantFautRaquer").val(total);
        produit7 = produit7 - 50000;
        $("#sousTotal7").val(produit7);
      } else {
        total = total - 50000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit7").hide();
      }
    })
    $("#moins8").click(function(){
      if (nmbrProduit8 >= 2)
        nmbrProduit8 --;
        $("#produitPanier8").val(nmbrProduit8);
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        produit8 = produit8 - 100000;
        $("#sousTotal8").val(produit8);
      } else {
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit8").hide();
      }
    })
    $("#moins9").click(function(){
      if (nmbrProduit9 >= 2){
        nmbrProduit9 --;
        $("#produitPanier9").val(nmbrProduit9);
        total = total - 110000;
        $("#maintenantFautRaquer").val(total);
        produit9 = produit9 - 110000;
        $("#sousTotal9").val(produit9);
      } else {
        total = total - 110000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit9").hide();
      }
    })
    $("#moins10").click(function(){
      if (nmbrProduit10){
        nmbrProduit10 --;
        $("#produitPanier10").val(nmbrProduit10);
        total = total - 140000;
        $("#maintenantFautRaquer").val(total);
        produit10 = produit10 - 140000;
        $("#sousTotal10").val(produit10);
      } else {
        total = total - 140000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit10").hide();
      }
    })
    $("#moins11").click(function(){
      if (nmbrProduit11){
        nmbrProduit11 --;
        $("#produitPanier11").val(nmbrProduit11);
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        produit11 = produit11 - 100000;
        $("#sousTotal11").val(produit11);
      } else {
        total = total - 100000;
        $("#maintenantFautRaquer").val(total);
        $("#displayProduit11").hide();
      }
    })
    $("#plus1").click(function(){
      nmbrProduit1 ++;
      $("#produitPanier1").val(nmbrProduit1);
      total = total + 10;
      $("#maintenantFautRaquer").val(total);
      produit1 = produit1 + 10;
      $("#sousTotal1").val(produit1);
    })
    $("#plus2").click(function(){
      nmbrProduit2 ++;
      $("#produitPanier2").val(nmbrProduit2);
      total = total + 20;
      $("#maintenantFautRaquer").val(total);
      produit2 = produit2 + 20;
      $("#sousTotal2").val(produit2);
    })
    $("#plus3").click(function(){
      nmbrProduit3 ++;
      $("#produitPanier3").val(nmbrProduit3);
      total = total + 50;
      $("#maintenantFautRaquer").val(total);
      produit3 = produit3 + 50;
      $("#sousTotal3").val(produit3);
    })
    $("#plus4").click(function(){
      nmbrProduit4 ++;
      $("#produitPanier4").val(nmbrProduit4);
      total = total + 5;
      $("#maintenantFautRaquer").val(total);
      produit4 = produit4 + 5;
      $("#sousTotal4").val(produit4);
    })
    $("#plus5").click(function(){
      nmbrProduit5 ++;
      $("#produitPanier5").val(nmbrProduit5);
      total = total + 1000;
      $("#maintenantFautRaquer").val(total);
      produit5 = produit5 + 1000;
      $("#sousTotal5").val(produit5);
    })
    $("#plus6").click(function(){
      nmbrProduit6 ++;
      $("#produitPanier6").val(nmbrProduit6);
      total = total + 5000;
      $("#maintenantFautRaquer").val(total);
      produit6 = produit6 + 5000;
      $("#sousTotal6").val(produit6);
    })
    $("#plus7").click(function(){
      nmbrProduit7 ++;
      $("#produitPanier7").val(nmbrProduit7);
      total = total + 50000;
      $("#maintenantFautRaquer").val(total);
      produit7 = produit7 + 50000;
      $("#sousTotal7").val(produit7);
    })
    $("#plus8").click(function(){
      nmbrProduit8 ++;
      $("#produitPanier8").val(nmbrProduit8);
      total = total + 100000;
      $("#maintenantFautRaquer").val(total);
      produit8 = produit8 + 100000;
      $("#sousTotal8").val(produit8);
    })
    $("#plus9").click(function(){
      nmbrProduit9 ++;
      $("#produitPanier9").val(nmbrProduit9);
      total = total + 110000;
      $("#maintenantFautRaquer").val(total);
      produit9 = produit9 + 110000;
      $("#sousTotal9").val(produit9);
    })
    $("#plus10").click(function(){
      nmbrProduit10 ++;
      $("#produitPanier10").val(nmbrProduit10);
      total = total + 140000;
      $("#maintenantFautRaquer").val(total);
      produit10 = produit10 + 140000;
      $("#sousTotal10").val(produit10);
    })
    $("#plus11").click(function(){
      nmbrProduit11 ++;
      $("#produitPanier11").val(nmbrProduit11);
      total = total + 100000;
      $("#maintenantFautRaquer").val(total);
      produit11 = produit11 + 100000;
      $("#sousTotal11").val(produit11);
    })
  })
  $("#pigeon").click(function(){
    alert("Le collectif LeBonCoinCoin vous remercie de votre investissement mais ce n'est qu'un site test. En revanche, si vous disposez d'une volonté sans faille (et d'un énorme compte en banque), vous pouvez envoyer vos coordonnées bancaires (numéro de carte, date d'expiration et cryptogramme visuel) à vallois-nicolas@outlook.fr (et oui je prends la tune parce que c'est moi qui ai fait la modal). Bisous à vous, au revoir !")
  })
})
