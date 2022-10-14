       // ${exemplo} == pega a let exemplo e substitui pelo prompt informado

		let listahospedes = [];  
		let nome = prompt("Digite o seu nome:");
		senha();

		function senha() {
			let password = parseInt(prompt("Digite sua senha, por favor:"));

			if (password != 2678) {
				window.alert("Senha incorreta, por favor, digite novamente:");
				senha();
			}
			else if (password === 2678) {
				window.alert(`Olá ${nome}!  Bem vindo ao Hotel P&B, é um prazer ter você por aqui!`);
				inicio();
			}
		}

		function inicio() {

			let escolha = parseInt(prompt("Selecione uma opção:\n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes\n3.) Hóspedes\n4.)Eventos \n5.) Buffet \n6.)Restaurante \n7.)Abastecimento de Carros \n8.) Manutenção Ar condicionado\n9.) Sair"));

			switch (escolha) {
				case 1:
					reservaquartos();
					break;
				case 2:
					cadastrohospedes();
					break;
				case 3:
					iniciohospedes();
					break;
				case 4:
					eventoshotel();
					break;
				case 5:
					buffethotel();
					break;
				case 6:
					restaurantehotel();
					break;
				case 7:
					abastecercarros();
					break;
				case 8:
					manutencaoAr();
					break;
				case 9:
					sair();
				default:
					erro();
					break;
			}
		}

		function reservaquartos() {
			window.alert(`HOTEL P&B - RESERVA DE QUARTOS`);

			let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária: "));
			let diasrevervados = parseInt(prompt("Quantas diárias serão necessárias?"));
			let valorTotal = 0;

			if (valorDiaria <= 0 || valorDiaria === "") {
				window.alert("Valor inválido. Digite um valor maior que 0(zero).");
				reservaquartos();
			}
			else if (diasrevervados > 30 || diasrevervados <= 0 || diasrevervados === "") {
				window.alert("Valor inválido. Digite um valor menor que 30.");
				reservaquartos();
			}
			else if (valorDiaria > 0 && diasrevervados > 0) {
				confirmarReserva();
			}

			function confirmarReserva() {

				let nomehospede = prompt("Informe o nome do(a) hóspede:");
				let confirma = prompt(`${nome}, você confirma a hospedagem para ${nomehospede} por ${diasrevervados} dias? S/N`);

				if (confirma.toUpperCase() == "N") {
					window.alert(`${nome}, reserva não efetuada`);
					inicio()
				}
				else if (confirma.toUpperCase() == "S") {
					valorTotal = valorDiaria * diasrevervados;
					window.alert(`${nome}, reserva efetuada para ${nomehospede}. O valor total é de ${valorTotal}.`);
					inicio()
				}
				else if (confirma === NaN) {
					window.alert("Valor inválido.")
					confirmarReserva();
				}
			}
		}

		function cadastrohospedes() {

			window.alert(`HOTEL P&B - CADASTRO DE HÓSPEDES`);
			let meia = 0;
			let gratuidade = 0;
			let totalHospedes = 0;
			let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária: "));
			let nomehospede = prompt("Digite o nome do hóspede ou PARE para encerrar: ");

			while (nomehospede.toUpperCase() != "PARE") {
				let idade = parseInt(prompt("Digite sua idade: "));

				if (idade <= 0 || idade === NaN || idade >= 150) {
					window.alert("Insira um valor válido para o campo idade.");
					cadastrohospedes();
				}

				else if (valorDiaria <= 0 || valorDiaria === NaN) {
					window.alert("Digite um valor válido para a diária.");
					cadastrohospedes();
				}

				else if (idade >= 6 && idade <= 60) {
					window.alert(`${nomehospede} cadastrado com sucesso.`)
					totalHospedes += valorDiaria;
				}
				else if (idade < 6) {
					window.alert(`${nomehospede} cadastrado com sucesso. ${nomehospede} possui gratuidade.`);
					gratuidade++;
				}
				else if (idade > 60) {
					window.alert(`${nomehospede} cadastrado com sucesso. ${nomehospede} paga meia.`);
					meia++;
					totalHospedes += valorDiaria / 2;
				}

				let nomehospede = prompt("Digite o nome do hóspede ou PARE para encerrar: ");

				if (nomehospede.toUpperCase() == "PARE") {
					window.alert(`${nome}, o total de hospedagem é: ${totalHospedes}; ${gratuidade} gratuidade(s); ${meia} meia(s).`);
					inicio();
				}

			}
		}

		function iniciohospedes() {
			let escolhahospedes = parseInt(prompt("Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair"));

			switch (escolhahospedes) {
				case 1:
					inserirhospedes();
					break;
				case 2:
					pesquisarhospedes();
					break;
				case 3:
					inicio();
					break;
				default:
					erro1();
					break;
			}
		}

		function inserirhospedes() {
			if (listahospedes.length >= 15) {
				window.alert("Numero máximo de hóspedes cadastrados.");
			} else {
				let nomehospede = prompt("Por favor, informe o nome da(o) hóspede:");

                listahospedes.push(nomehospede);
				alert("Sucesso! Hóspede " + nomehospede + " foi cadastrada(o) com sucesso!\n");
			}
			iniciohospedes();
		}

		function pesquisarhospedes() {

			let nomehospede = prompt("Por favor, informe o nome da(o) hóspede para pesquisa:");
			if (listahospedes.includes(nomehospede)) {
				alert(nomehospede + " encontrada(o).")
			} else {
				alert(nomehospede + " não foi encontrada(o).")
			}

			iniciohospedes()
		}

		function eventoshotel() {

			let horaseventos = parseInt(prompt("Qual a duração do evento em horas?"));
			let custogarcom = parseInt(prompt("Quantos garçons serão necessários?"));
			let custototal = horaseventos * custogarcom * 10.50;
			window.alert(`Custo total: R$ ${custototal}`);

			let reservaeventos = prompt("Gostaria de efetuar a reserva? S/N");

			if (reservaeventos.toUpperCase() == "S") {
				window.alert(`${nome}, reserva efetuada com sucesso.`);
				inicio();
			}
			else if (reservaeventos.toUpperCase() == "N") {
				window.alert(`${nome}, reserva não efetuada.`);
				inicio();
			}
			else {
				window.alert("Para confirmar ou rejeitar a reserva, digite: S ou N");
				inicio();
			}

		}

		function buffethotel() {

			let convidadosevento = parseInt(prompt("Qual o número de convidados para o evento?"));
			let numConvidados = [convidadosevento];
			let cafe = convidadosevento * 0.80;
			let agua = convidadosevento * 0.40;
			let quantcafe = convidadosevento * 0.2;
			let quantagua = convidadosevento * 0.5;
			let quantsalgados = convidadosevento * 7;
			let salgados = (quantsalgados / 100) * 34;
			let totalbuffet = cafe + agua + salgados;
            totalbuffet = totalbuffet.toFixed(2)

			if (convidadosevento > 350) {
				window.alert("Quantidade de convidados superior à capacidade máxima.");
				inicio();
			}
			else if (convidadosevento > 0 && convidadosevento <= 350) {
				window.alert(`O evento precisará de ${quantcafe} litros de café, ${quantagua} litros de água, ${quantsalgados} salgados. O custo total do evento será de R$ ${totalbuffet}`);
				auditoriohotel();
			}
		}

		function restaurantehotel() {

			let diaSemana = prompt("Qual o dia do seu evento? Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado.");

			switch (diaSemana.toLowerCase()) {
				case "domingo":
					domingo();
					break;
				case "segunda":
					segunda();
					break;
				case "terca":
					terca();
					break;
				case "quarta":
					quarta();
					break;
				case "quinta":
					quinta();
					break;
				case "sexta":
					sexta();
					break;
				case "sabado":
					sabado();
					break;
				default:
					erro2();
					break;
			}

			function segunda() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function terca() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quarta() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quarta() {

				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));
				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quinta() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function sexta() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 23) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function sabado() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 15) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Sábado: 7h às 15h.");
					inicio();
				}
			}

			function domingo() {
				let horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

				if (horaEvento >= 7 && horaEvento <= 15) {
					let nomeEmpresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nomeEmpresa}, ${diaSemana} às ${horaEvento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Domingo: 7h às 15h.");
					inicio();
				}
			}

		}

		function reserlethotel() {

			let reservaeventos = prompt("Gostaria de efetuar a reserva? S/N");

			if (reservaeventos.toUpperCase() == "S") {
				window.alert(`${nome}, reserva efetuada com sucesso.`);
				inicio();
			}
			else if (reservaeventos.toUpperCase() == "N") {
				window.alert(`${nome}, reserva não efetuada.`);
				inicio();
			}
			else {
				window.alert("Para confirmar ou rejeitar a reserva, digite: S ou N");
				inicio();
			}

		}

		function auditoriohotel() {

			let convidadosevento = parseInt(prompt(`${nome}, confirme o número de convidados para reserlet um salão adequado: `));

			if (convidadosevento > 350 || convidadosevento < 0) {
				window.alert(`${nome}, Número de convidades inválido`);
			}
			else if (convidadosevento > 0 && convidadosevento <= 220) {
				let cadeirasAdicionais = convidadosevento - 150;
				window.alert(`${nome}, use o auditório Laranja (inclua mais ${cadeirasAdicionais})`);
				reserlethotel();
			}
			else if (convidadosevento > 220 && convidadosevento <= 350) {
				window.alert(`${nome}, use o auditório Colorado`);
				reserlethotel();
			}
		}

		function abastecercarros() {
			alert(`HOTEL P&B - ABASTECER`);

			let alcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
			let gasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
			let alcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
			let gasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

			let calcAlcoolWayne = (100 * alcoolWayne) / gasolinaWayne;
			let porcentagemAlcoolWayne = 100 - calcAlcoolWayne;
			let calcAlcoolStark = (100 * alcoolWayne) / gasolinaWayne;
			let porcentagemAlcoolStark = 100 - calcAlcoolStark;

			if (alcoolWayne <= alcoolStark && porcentagemAlcoolWayne >= 30) {
				window.alert(`${nome}, é mais barato abastecer com álcool no posto Wayne Oil. Valor: R$${alcoolWayne}`);
				inicio();
			}
			else if (alcoolStark <= alcoolWayne && porcentagemAlcoolStark >= 30) {
				window.alert(`${nome}, é mais barato abastecer com álcool no posto Stark Petrol. Valor: R$${alcoolStark}`);
				inicio();
			}
			else if (gasolinaWayne < gasolinaStark && porcentagemAlcoolWayne < 30) {
				window.alert(`${nome}, é mais barato abastecer com gasolina no posto Wayne Oil. Valor: R$${gasolinaWayne}`);
				inicio();
			}
			else if (gasolinaStark < gasolinaWayne && porcentagemAlcoolStark < 30) {
				window.alert(`${nome}, é mais barato abastecer com gasolina no posto Stark Petrol. Valor: R$${gasolinaStark}`);
				inicio();
			}
		}

		function manutencaoAr() { 			

			let nomeEmpresa = prompt("Qual o nome da empresa?");
			let valorAparelhos = parseFloat(prompt("Qual o valor por aparelho?"));
			let quantAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
			let porcentagemdesc = parseFloat(prompt("Qual a porcentagem de desconto?"));
			let minimoAparelhos = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
			let totalManutencao = valorAparelhos * quantAparelho;
			let descontoManutencao = totalManutencao * (porcentagemdesc / 100);
			let totalDesconto = totalManutencao - descontoManutencao;
			let nomeempresamenor;
			let menorvalor = 99999999999999999;
			
			
			if (minimoAparelhos <= quantAparelho) {
				totalManutencao = totalDesconto;
			}

			window.alert(`O serviço da ${nomeEmpresa} custará R$${totalManutencao}`);
			
			if (totalManutencao < menorvalor) {

				nomeempresamenor = nomeEmpresa;
				menorvalor = totalManutencao;
				cadastronovaEmpresa();
			}
			

			function cadastronovaEmpresa() {

				let novoCadastro = prompt(`Deseja informar novos dados, ${nome}? (S/N)`);

				if (novoCadastro.toUpperCase() == "S") {
					manutencaoAr();
				}
				else if (novoCadastro.toUpperCase() == "N") {
					window.alert(`O orçamento de menor valor é o ${nomeempresamenor} por ${menorvalor}`);
					inicio();
				}
				
			}
		}

		function erro() {
			alert("Por favor, informe um número entre 1 e 9");
			inicio();
		}
		function erro1() {
			alert("Por favor, informe um número entre 1 e 3");
			iniciohospedes();
		}
		function erro2() {
			alert("Por favor, informe um dia da semana válido");
			diaSemana();
		}
		function sair() {
			let confirma = confirm("Você deseja sair?");
			if (confirma) {
				window.alert(`Muito obrigado e até logo, ${nome}.`);
				window.close();
			} else {
				inicio();
			}
		}
