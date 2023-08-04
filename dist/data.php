<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once("dbconn.php");
if($_SERVER['REQUEST_METHOD']==="GET"){
    if(isset($_GET["action"])&&$_GET["action"]=="all"&&isset($_GET["start"])&&isset($_GET["end"])){
        $start=intval($_GET["start"]);
        $end=intval($_GET["end"]);
        $q = $db->prepare("SELECT * FROM all_drinks WHERE id BETWEEN $start AND $end");
        $q->execute();
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
	http_response_code(200);
        echo json_encode($result);
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="byid"){
    if(isset($_GET["id"])){
      $id=$_GET["id"];
      $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM  all_drinks WHERE id=$id");
      $q->execute();
      $result = $q->fetchAll(PDO::FETCH_ASSOC);
      http_response_code(200);
      echo json_encode($result);
    }
    else{
      $res = array(
          "error:" => "no filter insered",
          "code" => 400,
      );
      echo json_encode($res);
      http_response_code(400);
    }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="random"){
    if(isset($_GET["number"])){
      $number=$_GET["number"];
      $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM  all_drinks ORDER BY RAND() LIMIT $number");
      $q->execute();
      $result = $q->fetchAll(PDO::FETCH_ASSOC);
      http_response_code(200);
      echo json_encode($result);
    }
    else{
      $res = array(
          "error:" => "no filter insered",
          "code" => 400,
      );
      echo json_encode($res);
      http_response_code(400);
    }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="alcoholic"){
      if(isset($_GET["filter"])){
        $filter=$_GET["filter"];
        $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM all_drinks WHERE strAlcoholic = ?");
        $q->execute([$filter]);
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($result);
      }
      else{
        $res = array(
            "error:" => "no filter insered",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
      }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="category"){
      if(isset($_GET["filter"])){
        $filter=$_GET["filter"];
        $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM all_drinks WHERE strCategory = ?");
        $q->execute([$filter]);
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($result);
      }
      else{
        $res = array(
            "error:" => "no filter insered",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
      }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="glass"){
      if(isset($_GET["filter"])){
        $filter=$_GET["filter"];
        $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM all_drinks WHERE strGlass = ?");
        $q->execute([$filter]);
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($result);
      }
      else{
        $res = array(
            "error:" => "no filter insered",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
      }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="iba"){
      if(isset($_GET["filter"])){
        $filter=$_GET["filter"];
        $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM all_drinks WHERE strIBA = ?");
        $q->execute([$filter]);
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($result);
      }
      else{
        $res = array(
            "error:" => "no filter insered",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
      }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="search"){
      if(isset($_GET["item"])&&$_GET["item"]=="drink")
        if(isset($_GET["filter"])){
          $filter=$_GET["filter"];
          $q = $db->prepare("SELECT id,strDrink,dateModified,idDrink,strAlcoholic,strCategory,strDrinkThumb,strGlass,strIBA,strIngredient1,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions,strMeasure1,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strVideo FROM all_drinks WHERE strDrink LIKE '%$filter%'");
          $q->execute();
          $result = $q->fetchAll(PDO::FETCH_ASSOC);
          http_response_code(200);
          echo json_encode($result);
        }
        else{
          $res = array(
              "error:" => "no filter insered",
              "code" => 400,
          );
          echo json_encode($res);
          http_response_code(400);
        }
      else{
        $res = array(
            "error:" => "no item insered or not correct",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
      }
    }
    else if(isset($_GET["action"])&&$_GET["action"]=="count"){
        $q = $db->prepare("SELECT count(*) as count FROM all_drinks");
        $q->execute();
        $result = $q->fetchAll(PDO::FETCH_ASSOC);
        echo $result[0]["count"];
    }
    else{
        $res = array(
            "error:" => "no action selected or not recognised",
            "code" => 400,
        );
        echo json_encode($res);
        http_response_code(400);
    }
}
else{
    $res = array(
        "error:" => "method not allowed",
        "code" => 405,
    );
    echo json_encode($res);
    http_response_code(405);
}
?>
