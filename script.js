        let lista_hospedes = [];  
		let nameHotel = prompt("Digite o nome do hotel, por favor:");
		window.alert(`O nome do hotel escolhido é ${nameHotel}`);

		let nameUser = prompt("Digite o seu nome:");
		senha();

		function senha() {
			let password = parseInt(prompt("Digite sua senha, por favor:"));

			if (password != 2678) {
				window.alert("Senha incorreta, por favor, digite novamente:");
				senha();
			}
			else if (password === 2678) {
				window.alert(`Bem vindo ao Hotel ${nameHotel}, ${nameUser}. É um imenso prazer ter você por aqui!`);
				inicio();
			}
		}

		function inicio() {


			let escolha = parseInt(prompt('Selecione uma opção:\n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes\n3.) Hóspedes\n4.)Eventos \n5.) Buffet do Hotel\n6.)Restaurante \n7.)Abastecimento de Carros \n8.) Manutenção Ar condicionado\n9.) Sair'));

			switch (escolha) {
				case 1:
					reserva_quartos();
					break;
				case 2:
					cadastro_hospedes();
					break;
				case 3:
					inicio_hospedes();
					break;
				case 4:
					eventos_hotel();
					break;
				case 5:
					buffet_hotel();
					break;
				case 6:
					restaurante_hotel();
					break;
				case 7:
					abastecer_carros();
					break;
				case 8:
					manutencao_Ar();
					break;
				case 9:
					sair();
				default:
					erro();
					break;
			}
		}

		function reserva_quartos() {
			window.alert(`HOTEL ${nameHotel} - RESERVA DE QUARTOS`);

			let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária: "));
			let diasHosp = parseInt(prompt("Quantas diárias serão necessárias?"));
			let valorTotal = 0;

			if (valorDiaria <= 0 || valorDiaria === "") {
				window.alert("Valor inválido. Digite um valor maior que 0(zero).");
				reserva_quartos();
			}
			else if (diasHosp > 30 || diasHosp <= 0 || diasHosp === "") {
				window.alert("Valor inválido. Digite um valor menor que 30.");
				reserva_quartos();
			}
			else if (valorDiaria > 0 && diasHosp > 0) {
				confirmar_Reserva();
			}

			function confirmar_Reserva() {

				let nome_hospede = prompt('Informe o nome do(a) hóspede:');
				let confirma = prompt(`${nameUser}, você confirma a hospedagem para ${nome_hospede} por ${diasHosp} dias? S/N`);

				if (confirma.toUpperCase() == "N") {
					window.alert(`${nameUser}, reserva não efetuada`);
					inicio()
				}
				else if (confirma.toUpperCase() == "S") {
					valorTotal = valorDiaria * diasHosp;
					window.alert(`${nameUser}, reserva efetuada para ${nome_hospede}. O valor total é de ${valorTotal}.`);
					inicio()
				}
				else if (confirma === NaN) {
					window.alert("Valor inválido.")
					confirmar_Reserva();
				}
			}
		}

		function cadastro_hospedes() {

			window.alert(`HOTEL ${nameHotel} - CADASTRO DE HÓSPEDES`);
			let meiaHosp = 0;
			let gratuidade = 0;
			let totalHosp = 0;
			let valorDiaria = parseFloat(prompt("Qual o valor padrão da diária: "));
			let nome_hospede = prompt("Digite o nome do hóspede ou PARE para encerrar: ");

			while (nome_hospede.toUpperCase() != "PARE") {
				let idade = parseInt(prompt("Digite sua idade: "));

				if (idade <= 0 || idade === NaN || idade >= 150) {
					window.alert("Insira um valor válido para o campo idade.");
					cadastro_hospedes();
				}

				else if (valorDiaria <= 0 || valorDiaria === NaN) {
					window.alert("Digite um valor válido para a diária.");
					cadastro_hospedes();
				}

				else if (idade >= 6 && idade <= 60) {
					window.alert(`${nome_hospede} cadastrado com sucesso.`)
					totalHosp += valorDiaria;
				}
				else if (idade < 6) {
					window.alert(`${nome_hospede} cadastrado com sucesso. ${nome_hospede} possui gratuidade.`);
					gratuidade++;
				}
				else if (idade > 60) {
					window.alert(`${nome_hospede} cadastrado com sucesso. ${nome_hospede} paga meia.`);
					meiaHosp++;
					totalHosp += valorDiaria / 2;
				}

				let nome_hospede = prompt("Digite o nome do hóspede ou PARE para encerrar: ");

				if (nome_hospede.toUpperCase() == 'PARE') {
					window.alert(`${nameUser}, o total de hospedagem é: ${totalHosp}; ${gratuidade} gratuidade(s); ${meiaHosp} meia(s).`);
					inicio();
				}

			}
		}

		function inicio_hospedes() {
			let escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

			switch (escolha_hospedes) {
				case 1:
					inserir_hospedes();
					break;
				case 2:
					pesquisar_hospedes();
					break;
				case 3:
					inicio();
					break;
				default:
					erro1();
					break;
			}
		}

		function inserir_hospedes() {
			if (lista_hospedes.length >= 15) {
				window.alert("Numero máximo de hóspedes cadastrados.");
			} else {
				let nome_hospede = prompt("Por favor, informe o nome da(o) hóspede:");

                lista_hospedes.push(nome_hospede);
				alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
			}
			inicio_hospedes();
		}

		function pesquisar_hospedes() {

			let nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
			if (lista_hospedes.includes(nome_hospede)) {
				alert(nome_hospede + ' encontrada(o).')
			} else {
				alert(nome_hospede + ' não foi encontrada(o).')
			}

			inicio_hospedes()
		}

		function eventos_hotel() {

			let horas_eventos = parseInt(prompt("Qual a duração do evento em horas?"));
			let custo_garcom = parseInt(prompt("Quantos garçons serão necessários?"));
			let custo_total = horas_eventos * custo_garcom * 10.50;
			window.alert(`Custo total: R$ ${custo_total}`);

			let reserva_eventos = prompt("Gostaria de efetuar a reserva? S/N");

			if (reserva_eventos.toUpperCase() == "S") {
				window.alert(`${nameUser}, reserva efetuada com sucesso.`);
				inicio();
			}
			else if (reserva_eventos.toUpperCase() == "N") {
				window.alert(`${nameUser}, reserva não efetuada.`);
				inicio();
			}
			else {
				window.alert("Para confirmar ou rejeitar a reserva, digite: S ou N");
				inicio();
			}

		}

		function buffet_hotel() {


			let convidados_evento = parseInt(prompt("Qual o número de convidados para o evento?"));
			let numConvidados = [convidados_evento];
			let cafe = convidados_evento * 0.80;
			let agua = convidados_evento * 0.40;
			let quant_cafe = convidados_evento * 0.2;
			let quant_agua = convidados_evento * 0.5;
			let quant_salgados = convidados_evento * 7;
			let salgados = (quant_salgados / 100) * 34;
			let total_buffet = cafe + agua + salgados;
            total_buffet = total_buffet.toFixed(2)

			if (convidados_evento > 350) {
				window.alert("Quantidade de convidados superior à capacidade máxima.");
				inicio();
			}
			else if (convidados_evento > 0 && convidados_evento <= 350) {
				window.alert(`O evento precisará de ${quant_cafe} litros de café, ${quant_agua} litros de água, ${quant_salgados} salgados. O custo total do evento será de R$ ${total_buffet}`);
				auditorio_hotel();
			}
		}

		function restaurante_hotel() {

			let dia_Semana = prompt("Qual o dia do seu evento? Domingo, Segunda, Terca, Quarta, Quinta, Sexta, Sabado.");

			switch (dia_Semana.toLowerCase()) {
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
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function terca() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quarta() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quarta() {

				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));
				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function quinta() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function sexta() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 23) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Seg. à Sexta: 7h às 23h.");
					inicio();
				}
			}

			function sabado() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 15) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Sábado: 7h às 15h.");
					inicio();
				}
			}

			function domingo() {
				let hora_Evento = parseInt(prompt("Qual a hora do seu evento?"));

				if (hora_Evento >= 7 && hora_Evento <= 15) {
					let nome_Empresa = prompt("Informe o nome da empresa: ");
					window.alert(`Restaurante reservado para ${nome_Empresa}, ${dia_Semana} às ${hora_Evento}h.`);
					inicio();
				}
				else {
					window.alert("Restaurante indisponível. Horário de funcionamento de Domingo: 7h às 15h.");
					inicio();
				}
			}

		}

		function reserlet_hotel() {

			let reserva_eventos = prompt("Gostaria de efetuar a reserva? S/N");

			if (reserva_eventos.toUpperCase() == "S") {
				window.alert(`${nameUser}, reserva efetuada com sucesso.`);
				inicio();
			}
			else if (reserva_eventos.toUpperCase() == "N") {
				window.alert(`${nameUser}, reserva não efetuada.`);
				inicio();
			}
			else {
				window.alert("Para confirmar ou rejeitar a reserva, digite: S ou N");
				inicio();
			}

		}

		function auditorio_hotel() {

			let convidados_evento = parseInt(prompt(`${nameUser}, confirme o número de convidados para reserlet um salão adequado: `));

			if (convidados_evento > 350 || convidados_evento < 0) {
				window.alert(`${nameUser}, Número de convidades inválido`);
			}
			else if (convidados_evento > 0 && convidados_evento <= 220) {
				let cadeirasAdicionais = convidados_evento - 150;
				window.alert(`${nameUser}, use o auditório Laranja (inclua mais ${cadeirasAdicionais})`);
				reserlet_hotel();
			}
			else if (convidados_evento > 220 && convidados_evento <= 350) {
				window.alert(`${nameUser}, use o auditório Colorado`);
				reserlet_hotel();
			}
		}

		function abastecer_carros() {
			alert(`HOTEL ${nameHotel} - ABASTECER`);

			let alcool_Wayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
			let gasolina_Wayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
			let alcool_Stark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
			let gasolina_Stark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

			let calc_Alcool_Wayne = (100 * alcool_Wayne) / gasolina_Wayne;
			let porcentagem_Alcool_Wayne = 100 - calc_Alcool_Wayne;
			let calc_Alcool_Stark = (100 * alcool_Wayne) / gasolina_Wayne;
			let porcentagem_Alcool_Stark = 100 - calc_Alcool_Stark;

			if (alcool_Wayne <= alcool_Stark && porcentagem_Alcool_Wayne >= 30) {
				window.alert(`${nameUser}, é mais barato abastecer com álcool no posto Wayne Oil. Valor: R$${alcool_Wayne}`);
				inicio();
			}
			else if (alcool_Stark <= alcool_Wayne && porcentagem_Alcool_Stark >= 30) {
				window.alert(`${nameUser}, é mais barato abastecer com álcool no posto Stark Petrol. Valor: R$${alcool_Stark}`);
				inicio();
			}
			else if (gasolina_Wayne < gasolina_Stark && porcentagem_Alcool_Wayne < 30) {
				window.alert(`${nameUser}, é mais barato abastecer com gasolina no posto Wayne Oil. Valor: R$${gasolina_Wayne}`);
				inicio();
			}
			else if (gasolina_Stark < gasolina_Wayne && porcentagem_Alcool_Stark < 30) {
				window.alert(`${nameUser}, é mais barato abastecer com gasolina no posto Stark Petrol. Valor: R$${gasolina_Stark}`);
				inicio();
			}
		}

		function manutencao_Ar() { 			

			let nome_Empresa = prompt("Qual o nome da empresa?");
			let valor_Aparelhos = parseFloat(prompt("Qual o valor por aparelho?"));
			let quant_Aparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
			let porcentagem_desc = parseFloat(prompt("Qual a porcentagem de desconto?"));
			let minimo_Aparelhos = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));
			let total_Manutencao = valor_Aparelhos * quant_Aparelho;
			let desconto_Manutencao = total_Manutencao * (porcentagem_desc / 100);
			let total_Desconto = total_Manutencao - desconto_Manutencao;
			let nome_empresa_menor;
			let menor_valor = 1000000000;
			
			
			if (minimo_Aparelhos <= quant_Aparelho) {
				total_Manutencao = total_Desconto;
			}

			window.alert(`O serviço da ${nome_Empresa} custará R$${total_Manutencao}`);
			
			if (total_Manutencao < menor_valor) {

				nome_empresa_menor = nome_Empresa;
				menor_valor = total_Manutencao;
				cadastro_novaEmpresa();
			}
			

			function cadastro_novaEmpresa() {

				let novo_Cadastro = prompt(`Deseja informar novos dados, ${nameUser}? (S/N)`);

				if (novo_Cadastro.toUpperCase() == "S") {
					manutencao_Ar();
				}
				else if (novo_Cadastro.toUpperCase() == "N") {
					window.alert(`O orçamento de menor valor é o ${nome_empresa_menor} por ${menor_valor}`);
					inicio();
				}
				
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 9');
			inicio();
		}
		function erro1() {
			alert('Por favor, informe um número entre 1 e 3');
			inicio_hospedes();
		}
		function erro2() {
			alert('Por favor, informe um dia da semana válido');
			inicio();
		}
		function sair() {
			let confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.alert(`Muito obrigado e até logo, ${nameUser}.`);
				window.close();
			} else {
				inicio();
			}
		}