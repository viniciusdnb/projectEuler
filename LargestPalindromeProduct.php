<?php

function largestPalindrome($index)
{	
	switch ($index) {
		case 1:
			$number = 10;
			calc($number);
		break;
		case 2:				
			$number = 99;
			calc($number);
			break;
		case 3:
			$number = 999;
			calc($number);
			break;
		default:
			echo "\nnumero nao é permitido escolha entre 1 e 3  \n";
			echo "caso coleque 4 e altere o codigo fonte o pc corre grande risco de TRAVAR\n \n";			
			break;
		}
}

function calc($number)
{
	$arr = [];
	$ar = [];
	$allPalindromo = [];
	$b = 0;

	echo "aguarde calculando \n";
	for($i = 0; $i <= $number; $i++)
	{
		for($a = 0; $a <= $number ; $a++)
		{
			//echo $i . " * " . $a . " = " . $i * $a . "\n";
			$arr[$b] =   $i * $a;
			$ar[$b] = str_split($arr[$b]);

			//transforma em string
			$str = implode($ar[$b]);

			//transforma a string em um array onde cada letra é uma elemento do array
			$strExp = str_split($str);

			//inverte os elemntos do array
			$reverse = array_reverse($strExp);

			//trasnforma cada elemnto do array em uma string
			$reverseStr = implode($reverse);

			
			if($str == $reverseStr)
			{
				$allPalindromo[$b] = $str;
			}

			$b++;
		}
		/*if($i / $number != 100)
		{
			echo "/";//round(($i / $number)*100,2) ."% \n";
			
		}*/
		$loading = $i / $number;
		$loading = $loading * 100;
		
		switch (round($loading)) 
		{
			case  $loading == 20 &&  $loading <= 21:
				echo "20% \n";
				break;
			case $loading >= 40 && $loading <= 41:
				echo "40% \n";
				break;
			case $loading >= 60 && $loading <= 61:
				echo "60% \n";
				break;
			case $loading >= 80 && $loading <= 81:
				echo "80% \n";
				break;
			case $loading == 100:
				echo "\n  100% calculo concluido !! \n";
				break;		
		}
				
	}
	echo "\n" ."maior palíndromo feito do produto de dois números de 3 algarismos: ". max($allPalindromo) . "\n \n" ;
}
	
	
largestPalindrome(3);

?>
