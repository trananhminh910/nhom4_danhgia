
		$(".close").click(function() {
			$(".open-item").hide();
		})

		$(".phancong").click(function() {
			$(".open-phancong").show();
		})

		$(".tieuchi").click(function() {
			$(".open-tieuchi").show();
		})

		$(".nhom1").click(function() {
			$(".open-nhom1").show();
		})
		$(".nhom2").click(function() {
			$(".open-nhom2").show();
		})
		$(".nhom3").click(function() {
			$(".open-nhom3").show();
		})
		$(".nhom5").click(function() {
			$(".open-nhom5").show();
		})
		$(".nhom6").click(function() {
			$(".open-nhom6").show();
		})
		$(".nhom7").click(function() {
			$(".open-nhom7").show();
		})
		$(".nhom8").click(function() {
			$(".open-nhom8").show();
		})
		$(".nhom9").click(function() {
			$(".open-nhom9").show();
		})
		$(".nhom10").click(function() {
			$(".open-nhom10").show();
		})
		$(".nhom11").click(function() {
			$(".open-nhom11").show();
		})

		$(".danhgia").click(function() {
			setTimeout(function() {
				$(".main-item").eq(0).hide(500);
			},500);
			setTimeout(function() {
				$(".main-item").eq(1).hide(500);
			},1000);
			setTimeout(function() {
				$(".main-item").eq(2).hide(500);
			},1500);

			

			setTimeout(function() {
				$(".child-item").eq(0).show(500);
			},2000);
			setTimeout(function() {
				$(".child-item").eq(1).show(500);
			},2500);
			setTimeout(function() {
				$(".child-item").eq(2).show(500);
			},3000);
			setTimeout(function() {
				$(".child-item").eq(3).show(500);
			},3500);
			setTimeout(function() {
				$(".child-item").eq(4).show(500);
			},4000);
			setTimeout(function() {
				$(".child-item").eq(5).show(500);
			},4500);
			setTimeout(function() {
				$(".child-item").show(500);
			},5000);
			
		})