<?php

class LargestNumberFactor
{
	private array $numberList;
	private int $number;
	private int $length;
	
	/**
	* @param int $number numero para fatorar
	* @param int $length tamanho da lista desejada
	*/
	function __construct($number, $length)
	{
		$this->number = $number;		
		$this->length = $length;	
		$this->primeNumberList();
	}

	public function getLength()
	{
		return $this->length;
	}	
	
	public function getNumberList()
	{
		return $this->numberList;
	}

	public function getNumber()
	{
		return $this->number;
	}

	private function primeNumberList()
	{
		$arr = [0 => 2, 1 => 3, 2 => 5, 3 => 7];
		
		$key = 4;

			for($i = 4; $i < $this->getLength() ;$i++)
			{
					if($i % 2 != 0 && $i % 3 != 0 && $i % 5 && $i % 7 != 0)
					{
							$arr[$key] = $i;
							$key++;           
					}
			}

			$this->numberList = $arr;
	}

	public function factor()
	{	
		$number = $this->getNumber();
		$numberList = $this->getNumberList();
		$i = 0;
		$arr = [];
		
			do{
				if($number % $numberList[$i] == 0)
				{
					//echo $number . " / " . $numberList[$i] . " = " . $number / $numberList[$i] . "\n";
					$number = $number / $numberList[$i];
					$arr[] = $numberList[$i];
				}else{
					$i++;
				}
			
			}while($number != 1);
			
		return $arr;
	}
}

$n = new LargestNumberFactor(600851475143,10000);


error_reporting(~E_NOTICE);

try {
	//var_dump($n->factor());
	echo "\n maior fator é: " .end($n->factor()) . "\n";
} catch (\Throwable $th) {

	echo "Lista é muito pequena de numero, aumente para ter o resultado correto \n 
	descrição do erro no PHP: \n \n \n"; 
	
	throw $th;
}

//Largest Number Factor = 6857

?>


