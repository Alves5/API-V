import pdf from "html-pdf";

class gerar_pdf {
    gerarPDF(objeto){

        const htmlContent = `
    <html>
<head>
    <meta charset="utf-8" />
    <style>
        h1 {
            color: black;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 10.5pt;
        }

        p,
        td {
            color: black;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 10.5pt;
            margin: 0pt;
            text-align: justify;
            vertical-align: top;
        }

        .s1 {
            color: #FFF;
            font-style: normal;
            font-weight: bold;
            text-decoration: none;
            font-size: 10.5pt;
        }

        table,
        tbody {
            vertical-align: top;
            overflow: visible;
        }
        .header {
            text-align: center;
            background-color: #ddd;
            padding: 10px;
          }
        .footer {
            text-align: center;
            background-color: #ddd;
            padding: 10px;
        }
    </style>
</head>

<body>
    <main>
        <h1 style="text-align: center;">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE AGENCIAMENTO DE INTERCÂMBIO.</h1>
        <p>O presente Contrato de Prestação de Serviços da Agência OK INTERCÂMBIO VIAGENS E TURISMO LTDA, com sede
            Avenida Santos Dumont, 2789,sala 702, Aldeota, Fortaleza/CE, Brasil, CEP: 60150-161, inscrita regularmente no CNPJ/MF sob o nº 23.263.680/0001-31, a seguir denominada CONTRATADA, e
            de outro lado, na qualidade de CONTRATANTE, denominado; </p>
        <table cellspacing="1">
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td style="background-color: #F69646;" class="s1"> CONTRATANTE: </td>
                <td bgcolor="#FCE4CD" colspan="3">${objeto[0]['Nome completo']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> EMAIL: </td>
                <td bgcolor="#FCE4CD" colspan="3">${objeto[0]['Email']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> NACIONALIDADE: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Nacionalidade']}</td>
                <td bgcolor="#F69646" class="s1"> ENDEREÇO: </td>
                <td bgcolor="#FCE4CD" style="text-align: left;">${objeto[0]['Endereço']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> NASCIMENTO: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Data de nascimento']}</td>
                <td bgcolor="#F69646" class="s1"> BAIRRO: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Bairro']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> CPF: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['CPF']}</td>
                <td bgcolor="#F69646" class="s1"> CIDADE: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Cidade']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> IDENTIDADE: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Identidade']}</td>
                <td bgcolor="#F69646" class="s1"> ESTADO: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Estado']}</td>
            </tr>
            <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                <td bgcolor="#F69646" class="s1"> CELULAR: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['Número']}</td>
                <td bgcolor="#F69646" class="s1"> CEP: </td>
                <td bgcolor="#FCE4CD">${objeto[0]['CEP']}</td>
            </tr>
        </table>
        <p>O instrumento tem por finalidade prestar informações quanto às condições gerais do Programa de estudos em
            instituições de ensino no exterior, consubstanciadas na descrição, preço, formas de pagamento, prazo, regras
            das escolas, tipos de hospedagem, documentos essenciais de responsabilidade do CONTRATANTE, dentre outras,
            além da descrição dos serviços de intermediação prestados pela OK INTERCÂMBIO.</p>
        <p>O CONTRATANTE está ciente de que este contrato possui em anexo, a PROPOSTA ORÇAMENTÁRIA n° ${objeto[0]['Número da proposta']}, cujo
            conteúdo foi previamente aprovado, portanto, após aceite do CONTRATANTE, ambas as partes se obrigam ao
            cumprimento integral do disposto no referido anexo que passará a vigorar concomitantemente a este contrato.
        </p>
        <p>Tendo em vista as premissas e o mútuo acordo evidenciado no presente Contrato de Prestação de Serviços de
            Agenciamento de Intercâmbio, as partes acima identificadas se obrigam conforme as cláusulas e condições a
            seguir dispostas:</p>
        <table>
            <tr>
                <td width="20">
                    <p class="s4">1.</p>
                </td>
                <td width="605">
                    <p class="s4">DO OBJETO</p>
                    <table>
                        <tr style="max-height: 10px">
                            <td width="35">1.1.</td>
                            <td width="565">O presente instrumento tem por objeto a contratação pessoal e intransferível
                                de assistência especializada no planejamento de programa de intercâmbio em instituição
                                de ensino no Exterior.</td>
                        </tr>
                        <tr>
                            <td width="35">1.2.</td>
                            <td width="565">Podem ainda ser incluídos no valor total deste contrato, caso solicitado
                                pelo contratante os seguintes serviços: I- assessoramento na obtenção de passagens
                                aéreas, II- seguro viagem, III- acomodações e IV- auxílio para emissão de vistos.</td>
                        </tr>
                        <tr>
                            <td width="35">1.3.</td>
                            <td width="565">Os serviços contratados foram apresentados ao CONTRATANTE, mediante Proposta
                                Orçamentária, anexo deste contrato, portanto, obrigando as partes ao cumprimento em sua
                                integralidade nos termos deste instrumento.</td>
                        </tr>
                        <tr>
                            <td width="35">1.4.</td>
                            <td width="565">Diante do exposto acima não estão inclusas as despesas a título de visto,
                                vacinas, autorização de viagem, refeições não mencionadas no programa específico
                                contratado e ainda despesas extras realizadas durante a viagem de caráter pessoal, tais
                                como transporte público, lavanderia, telefonemas dentre outras.</td>
                        </tr>
                        <tr>
                            <td width="35">1.5.</td>
                            <td width="565">Os serviços que serão efetivados por Prestadores de Serviços, são de
                                responsabilidade destes, cabendo a OK INTERCÂMBIO somente a intermediação e repasse das
                                informações destes serviços ao CONTRATANTE.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">2.</p>
                </td>
                <td width="605">
                    <p class="s4">DO PRAZO</p>
                    <table>
                        <tr>
                            <td width="35">2.1.</td>
                            <td width="565">Este contrato terá vigência de 12 (doze) meses a contar da data de sua
                                assinatura, salvo exceções onde o prazo de embarque supera o limite de vigência a data
                                prevista de embarque.</td>
                        </tr>
                        <tr>
                            <td width="35">2.2.</td>
                            <td width="565">Caso o pacote de intercâmbio venha a ser realizado em prazo inferior à
                                vigência e não haja nenhuma pendência de ordem financeira ou administrativa pelas partes
                                a ser resolvido, o contrato restará encerrado quando do retorno do estudante ao Brasil e
                                após a sua regular participação no programa contratado.</td>
                        </tr>
                        <tr>
                            <td width="35">2.3.</td>
                            <td width="565">As alterações de valores estipulados por Prestadores de Serviços (escola,
                                acomodação, recepção...) não estão submetidas ao prazo de validade deste contrato,
                                devendo o CONTRATANTE, assumir a responsabilidade de reajustes de valores na hipótese de
                                eventuais alterações de prazos na aquisição dos serviços.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">3.</p>
                </td>
                <td width="605">
                    <p class="s4">DAS OBRIGAÇÕES E RESPONSABILIDADES DA CONTRATADA</p>
                    <table>
                        <tr>
                            <td width="35">3.1.</td>
                            <td width="565">A OK INTERCÂMBIO obriga-se a cumprir com todas as cláusulas deste
                                instrumento contratual, executando fielmente seus serviços de agenciador e intermediador
                                de intercâmbio, obedecendo às disposições internas das instituições envolvidas nos
                                seguintes termos:<br />
                                <table>
                                    <tr>
                                        <td width="50">3.1.1.</td>
                                        <td width="510">Providenciar os contatos diretos com as instituições
                                            internacionais parceiras e operadoras do programa contratado, encaminhando a
                                            documentação do CONTRATANTE, bem como os repasses dos valores recebidos que
                                            cabem a tais instituições, solicitando a inclusão do ESTUDANTE no curso
                                            escolhido em tempo hábil.<br /><b>Parágrafo único:</b> Havendo, porventura,
                                            qualquer alteração por parte da instituição parceira (ESCOLA) inicialmente
                                            contratada antes do embarque, a OK INTERCÂMBIO se compromete a providenciar
                                            a colocação do Contratante em escola de igual qualidade, sendo ressarcido ou
                                            cobrada a diferença para a primeira escola.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.1.2.</td>
                                        <td width="510">Fornecer orientação necessária ao ESTUDANTE, apresentando
                                            claramente a ele as condições as quais o mesmo estará submetido no exterior,
                                            o que dar-se-á conforme as normas específicas do programa contratado bem
                                            como entregando-lhe, em tempo hábil necessário à promoção do embarque do
                                            mesmo, os documentos necessários à realização da viagem ora contratada.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.1.3.</td>
                                        <td width="510">Promover, durante toda a duração da viagem contratada, a
                                            interface necessária entre CONTRATANTE/ESTUDANTE e a instituição
                                            internacional a fim de proporcionar ao viajante segurança na viagem
                                            contratada.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.1.4.</td>
                                        <td width="510">Prestar orientação pré-embarque ao CONTRATANTE, através de
                                            reunião presencial ou por videoconferência, desde que o ESTUDANTE compareça
                                            na data marcada.<br /><b>Parágrafo único:</b> Excetuando-se no item
                                            anterior, a matrícula que a documentação poderá ser apresentada em até 24
                                            horas antes do embarque.</td>
                                    </tr>
                                </table> 
                            </td>
                        </tr>
                        <tr>
                            <td width="35">3.2.</td>
                            <td width="565">Caso sejam incluídos na PROPOSTA ORÇAMENTÁRIA pelo CONTRATANTE outros
                                serviços a OK INTERCÂMBIO obriga-se a cumprir com todas as cláusulas deste instrumento
                                contratual, nos seguintes termos:<br />
                                <table>
                                    <tr>
                                        <td width="50">3.2.1.</td>
                                        <td width="510"><b>VISTO:</b> A OK INTERCÂMBIO se compromete a prestar auxílio
                                            no encaminhamento do pedido de visto para o País de destino (se este for
                                            necessário) e se devidamente fornecido, em tempo hábil, todos os documentos
                                            solicitados pela CONTRATADA, pela Escola e ou entidade responsável pela
                                            concessão do visto, não se responsabilizando, contudo, por eventual negativa
                                            na concessão de visto que extrapole os esforços e a competência da
                                            CONTRATADA.<br /><b>Parágrafo primeiro:</b> A concessão de visto é atividade
                                            discricionária e soberana dos consulados e órgãos de imigração de cada país,
                                            não cabendo a OK INTERCÂMBIO, nenhuma responsabilidade e/ou obrigação, na
                                            hipótese de não concessão do visto e/ou atraso por parte do
                                            consulado/embaixada no processamento. Os prazos informados pela OK
                                            INTERCÂMBIO são SEMPRE mera estimativa. A OK INTERCÂMBIO não tem qualquer
                                            responsabilidade sobre a duração do visto concedido, período de férias
                                            autorizado ou possibilidade de renovação do visto autorizada ou não pelos
                                            órgãos de imigração.<br /><b>Parágrafo segundo:</b> Documentos emitidos e de
                                            responsabilidade do Contratante para apresentação ao agente de imigração,
                                            assim como a apresentação de documentos complementares que se fizerem
                                            necessários na análise do pedido de visto e a participação na entrevista a
                                            ser solicitada pelo Consulado, são obrigações do CONTRATANTE.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.2.2.</td>
                                        <td width="510"><b>ACOMODAÇÃO:</b> A OK INTERCÂMBIO se compromete a providenciar
                                            a acomodação para o CONTRATANTE, sempre respeitando as regras e prazos das
                                            diferentes instituições que oferecem acomodações, conforme descrição na
                                            cláusula oitava deste instrumento.<br /><b>Parágrafo primeiro:</b> Caso a
                                            acomodação do programa esteja adstrita às opções e disponibilidades
                                            oferecidas pela escola, na qual o CONTRATANTE estudará, a OK INTERCÂMBIO não
                                            se responsabiliza por eventual alteração de acomodação promovida pela
                                            escola/prestadores de serviços, ficando o estudante desde já ciente que
                                            existe a possibilidade de alteração pela escola e caso haja diferença de
                                            valores, é responsabilidade do contratante pagar a diferença (se o valor for
                                            maior que o acordado) e a OK INTERCÂMBIO o reembolso (caso o valor seja
                                            menor).<br /><b>Parágrafo segundo:</b> Chegando ao destino, se o Estudante
                                            não ficar satisfeito deverá informar imediatamente a OK INTERCÂMBIO pelo
                                            canal de atendimento ao Cliente com o máximo de detalhes possíveis sobre o
                                            ocorrido.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.2.3.</td>
                                        <td width="510"><b>SEGURO VIAGEM:</b> Intermediar a contratação de seguro
                                            viagem, conforme as regras da seguradora escolhida.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">3.2.4.</td>
                                        <td width="510"><b>PASSAGEM AÉREA:</b> Intermediar a aquisição de passagens
                                            aéreas, nos termos e condições propostos pelas companhias aéreas, sem
                                            qualquer obrigação adicional no que se refere ao cumprimento dos horários
                                            dos voos, perda ou extravio de bagagem, ou qualquer outro dano e/ou vício do
                                            serviço que compete à companhia aérea ou sobre qual o CONTRATANTE não possua
                                            qualquer ingerência. A prestação de serviço aéreo é de exclusiva
                                            responsabilidade da companhia aérea e é regulado de acordo com as normas
                                            estabelecidas pela Agência Nacional de Aviação Civil (ANAC), sendo a
                                            companhia legalmente responsável por qualquer ato, fato ou defeito na
                                            prestação de serviço.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">4.</p>
                </td>
                <td width="605">
                    <p class="s4">DAS OBRIGAÇÕES E RESPONSABILIDADES DO CONTRATANTE</p>
                    <table>
                        <tr>
                            <td width="35">4.1.</td>
                            <td width="565">Competirá ao CONTRATANTE:<br />
                                <table>
                                    <tr>
                                        <td width="50">4.1.1.</td>
                                        <td width="510">Pagar o preço ajustado por todo serviço contratado nos termos e
                                            valores acordados entre as partes.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.2.</td>
                                        <td width="510">Assinar todos os documentos relacionados ao programa contratado,
                                            incluindo-se o presente instrumento e todos os anexos porventura existentes
                                            e a ele relacionados, cumprindo integralmente todas as cláusulas ali
                                            dispostas.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.3.</td>
                                        <td width="510">Fornecer toda a documentação exigida pela OK INTERCÂMBIO para
                                            validação da participação do ESTUDANTE nos programas contratados,
                                            responsabilizando-se, ainda pela procedência e veracidade da mesma.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.4.</td>
                                        <td width="510">Informar-se, previamente, de todas as regras internas da escola
                                            e/ou estabelecimento de acomodação no exterior, obrigando-se a respeitar
                                            todas elas, não respondendo a CONTRATADA, em nenhuma hipótese por eventual
                                            violação destas.<br /><b>Parágrafo primeiro:</b> A OK INTERCÂMBIO
                                            compromete-se a, por intermédio de seu corpo de colaboradores, atender e
                                            esclarecer todas as dúvidas do contratante, sendo que em havendo dúvidas
                                            sobre o intercâmbio ou sobre o contrato, deve o CONTRATANTE entrar em
                                            contato com a CONTRATADA.<br /><b>Parágrafo segundo:</b> Alguns dos
                                            documentos a serem entregues ao Contratante, relativos às instituições
                                            estrangeiras (incluindo a escola) poderão estar em língua estrangeira.
                                            Caberá ao Estudante lê-los e compreendê-los.<br /><b>Parágrafo terceiro:</b>
                                            É obrigatório respeitar a frequência mínima exigida pela escola para receber
                                            o certificado de conclusão de curso.<br /><b>Parágrafo quarto:</b> O
                                            CONTRATANTE/ESTUDANTE se compromete com as informações prestadas, incluindo
                                            aquelas relativas ao nível do idioma requerido e/ou necessárias para cursos
                                            avançados e específicos como EAP, IELTS, TOEFL, CAMBRIDGE, VET-TÉCNICO).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.5.</td>
                                        <td width="510">Comparecer às reuniões presenciais ou online de orientações
                                            promovidas pela CONTRATADA, comprometendo-se em seguir com rigor as
                                            recomendações.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.6.</td>
                                        <td width="510">Prestar informações verdadeiras para a OK INTERCÂMBIO e todas as
                                            demais instituições envolvidas no intercâmbio sempre que solicitadas, não
                                            sendo de responsabilidade da CONTRATADA a ocorrência de qualquer ato/fato
                                            decorrente de informação inverídica.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.7.</td>
                                        <td width="510">Não realizar qualquer alteração de acomodação ou escola no
                                            exterior sem comunicar anteriormente e obter a prévia autorização da OK
                                            INTERCÂMBIO e respectivos responsáveis.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.8.</td>
                                        <td width="510">Verificar com 72 horas de antecedência a confirmação do seu
                                            horário de voo, tanto no embarque, quanto no retorno, quando a passagem for
                                            adquirida com a OK INTERCÂMBIO, visto que as companhias aéreas mudam o
                                            horário do voo sem aviso prévio.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.9.</td>
                                        <td width="510">Verificar a necessidade de visto no país de conexão de voo e no
                                            país de destino sendo de sua responsabilidade, ou de algum responsável, a
                                            documentação exigida para retirada de visto, entrevistas, e a comprovação do
                                            capital garantido e comprovação de acomodação.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.10</td>
                                        <td width="510">Respeitar de forma incondicional às leis locais, não havendo
                                            qualquer possibilidade de reembolso de qualquer valor pago em caso de
                                            deportação ou conduta ilegal no exterior. </td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.11</td>
                                        <td width="510">O ESTUDANTE que detiver conduta impróprias ou ofensiva durante a
                                            sua participação no programa contratado será compulsoriamente desligado
                                            dele, sendo tal decisão tomada pela OK INTERCÂMBIO ou pela Instituição
                                            Internacional administradora de tal programa. Outrossim, considera-se
                                            conduta imprópria ou ofensiva aquela em desacordo com as convenções sociais
                                            padrão, tais como o uso ilegal de drogas, comportamento sexual inadequado,
                                            consumo excessivo de álcool, recusa em obedecer às determinações locais ou
                                            qualquer outro incidente violento por ele provocado e que o atinja, bem como
                                            a terceiro.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.12</td>
                                        <td width="510">É responsabilidade do Estudante carregar consigo, durante toda a
                                            viagem ora contratada, passaporte válido.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.13</td>
                                        <td width="510">É responsabilidade do ESTUDANTE o cuidado pela guarda de
                                            qualquer objeto ou valor levado para o Exterior, desobrigando a OK
                                            INTERCÂMBIO de qualquer reembolso decorrente de perda, extravio ou roubo.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.14</td>
                                        <td width="510">Caso o Estudante seja menor de idade, é de RESPONSABILIDADE
                                            única e exclusiva dos seus responsáveis legais a aquisição de documentação
                                            autorizativa de viagem de menor desacompanhado.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.15</td>
                                        <td width="510">O ESTUDANTE se compromete a comparecer no primeiro dia de aula,
                                            munido de passaporte e carta de matrícula, para receber as orientações da
                                            escola e para definição, dependendo de cada curso, matérias e horários</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.16</td>
                                        <td width="510">O CONTRATANTE está ciente da obrigatoriedade da contratação do
                                            Seguro Obrigatório, sendo que além deste, o CONTRATANTE de forma opcional
                                            poderá adquirir o seguro privado, devendo observar a cobertura mínima
                                            exigida pelo governo do país de destino.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">4.1.17</td>
                                        <td width="510">Entregar toda a documentação solicitada, bem como a cópia das
                                            passagens aéreas (quando não inclusa no pacote) para a CONTRATADA assim como
                                            realizar o pagamento total do pacote (em caso de parcelamento,
                                            independentemente da data da última parcela) no prazo de 60 (sessenta) dias
                                            corridos anteriores do embarque, ficando o CONTRATANTE ciente de sua
                                            responsabilidade por despesas gerais que podem advir do atraso da entrega,
                                            como diferença do câmbio, diferença tarifária das instituições, entre
                                            outras, caso não haja tempo hábil de processar o intercâmbio, além do
                                            pagamento de uma Taxa de Urgência no valor de R$ 350,00 reais ().</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">5.</p>
                </td>
                <td width="605">
                    <p class="s4">DA RESOLUÇÃO DO CONTRATO</p>
                    <table>
                        <tr>
                            <td width="35">5.1.</td>
                            <td width="565">Em caso de desistência do CONTRATANTE, antes do embarque, resolve-se o
                                contratado através da política de reembolso, a qual o CONTRATANTE declara ter
                                conhecimento.<br /><b>Parágrafo único:</b> Em caso de desistência após o embarque não
                                haverá reembolso de valores.</td>
                        </tr>
                        <tr>
                            <td width="35">5.2.</td>
                            <td width="565">Em caso de deportação, resolve-se o contrato sem qualquer direito a
                                reembolso, haja vista ter decorrido de ação ou omissão do CONTRATANTE no exterior, sem
                                prejuízo de reparação pelo CONTRATANTE de perdas e danos eventualmente suportados pela
                                OK INTERCÂMBIO.</td>
                        </tr>
                        <tr>
                            <td width="35">5.3.</td>
                            <td width="565">Poderá a OK INTERCÂMBIO resolver o contrato em caso de não pagamento do
                                preço ou mora do contratante, sem prejuízo do pagamento do valor correspondente aos
                                serviços prestados, bem como de retenção a título de cláusula penal de 30% (trinta por
                                cento) do valor pago. <br />Parágrafo único: Será considerado prejuízo a OK INTERCÂMBIO,
                                para esta cláusula e para as outras em que se fez a mesma referência, por exemplo, o
                                pagamento adiantado (pela Contratada) da escola, da acomodação, de taxas de qualquer
                                natureza, das passagens aéreas, bem como dos serviços de qualquer funcionário da
                                empresa.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">6.</p>
                </td>
                <td width="605">
                    <p class="s4">DAS POLÍTICAS DE CANCELAMENTO E REEMBOLSO</p>
                    <table>
                        <tr>
                            <td width="35">6.1.</td>
                            <td width="565">A OK INTERCÂMBIO apresenta suas políticas de cancelamento e reembolso com
                                objetivo de informar e dar ciência aos clientes sobre suas regras aplicáveis a extinção
                                de contrato.</td>
                        </tr>
                        <tr>
                            <td width="35">6.2.</td>
                            <td width="565">Independente do motivo de extinção de contrato, as regras a seguir elencadas
                                são gerais e aplicam-se a qualquer hipótese:<br />
                                <table>
                                    <tr>
                                        <td width="50">6.2.1.</td>
                                        <td width="510"><b>CÂMBIO PARA REEMBOLSO:</b> O reembolso será realizado SEMPRE
                                            de acordo com o câmbio pago na data da contratação.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">6.2.2.</td>
                                        <td width="510"><b>PRAZOS PARA REEMBOLSO:</b> O prazo para reembolso é sempre de
                                            60 (sessenta) dias para os valores relativos ao programa e até 180 (cento e
                                            oitenta) dias para os valores relativos à passagem aérea, considerando as
                                            regras estabelecidas pelas companhias aéreas.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">6.2.3.</td>
                                        <td width="510"><b>PASSAGENS AÉREAS:</b> Independentemente da causa do
                                            cancelamento do programa de intercâmbio, haverá multa (retenção) sobre o
                                            valor total das passagens aéreas.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">6.2.4.</td>
                                        <td width="510"><b>PASSAGENS AÉREAS PROMOCIONAIS:</b> Algumas companhias aéreas
                                            oferecem passagens com tarifas promocionais tendo a impossibilidade de
                                            qualquer reembolso. O CONTRATANTE será informado dessa condição no momento
                                            do fechamento do pacote.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="35">6.3.</td>
                            <td width="565"><b>REEMBOLSO OU ALTERAÇÃO DECORRENTE DE VISTO NEGADO:</b> As regras
                                relativas ao reembolso por “visto negado” são válidas apenas para os casos em que o
                                visto é exigido pelo país de destino. O Contratante tem até 60 (sessenta) dias após o
                                visto negado para solicitar o reembolso do programa, caso não o faça, a multa será
                                aplicada de acordo com os prazos e regras de desistência constantes neste contrato sendo
                                a retenção do valor em 35% do valor do pacote por ser causa alheia a OK INTERCÂMBIO.
                            </td>
                        </tr>
                        <tr>
                            <td width="35">6.4.</td>
                            <td width="565"><b>REEMBOLSO DECORRENTE DA INADMISSÃO DO ALUNO PELO PAÍS DE DESTINO:</b> O
                                CONTRATANTE não sendo admitido no país de destino, isto é, não ser admitido pelas
                                autoridades alfandegárias do respectivo país, o que é causa alheia a vontade da OK
                                INTERCÂMBIO, haverá a retenção de 35% do valor pago pelo programa. Parágrafo único: Em
                                relação à passagem aérea, não há reembolso visto que as companhias aéreas não reembolsam
                                bilhetes que tenham sido utilizados.</td>
                        </tr>
                        <tr>
                            <td width="35">6.5.</td>
                            <td width="565"><b>REEMBOLSO POR DESISTÊNCIA DE INICIATIVA DO ALUNO:</b> As regras
                                constantes nesta cláusula aplicam-se para os casos em que o contratante por opção e
                                iniciativa própria desiste de cursar o programa escolhido. Os valores de reembolso serão
                                variados de acordo com o prazo de antecedência ao início do programa, em que o
                                CONTRATANTE comunicar a OK INTERCÂMBIO:<br />
                                <table>
                                    <tr>
                                        <td width="50">6.5.1.</td>
                                        <td width="510">Independentemente do momento em que for comunicada a desistência
                                            pelo aluno, haverá a cobrança (ou retenção) das taxas de matrícula, de
                                            reserva de acomodação e de serviço que perfaz o valor de R$ ). Essa taxa se presta a remunerar a agência pela
                                            assessoria prestada desde o recebimento do contratante, esclarecimento de
                                            dúvidas, auxílio na definição da compra, contato com as instituições
                                            estrangeiras (por e-mail e telefone), consulados, embaixadas, e demais
                                            fornecedores necessários à realização do programa de intercâmbio. A esta
                                            taxa, somam-se as multas abaixo:<br />
                                            <table>
                                                <tr>
                                                    <td width="60">6.5.1.1.</td> 
                                                    <td width="450">Quando a desistência for comunicada com antecedência
                                                        de 45 dias ou mais, à data de início do curso firmada na
                                                        assinatura do contrato descontadas haverá reembolso de até 70%
                                                        do valor contratual pago (retenção de 30%).</td>
                                                </tr>
                                                <tr>
                                                    <td width="60">6.5.1.2.</td>
                                                    <td width="450">Quando a desistência for manifestada com
                                                        antecedência inferior a 45 e superior a 20 dias à data de início
                                                        do curso, haverá reembolso de até 50% do valor contratual pago
                                                        (retenção de 50%).</td>
                                                </tr>
                                                <tr>
                                                    <td width="60">6.5.1.3.</td>
                                                    <td width="450">Quando a desistência for manifestada com
                                                        antecedência igual ou inferior a 20 dias à data de início do
                                                        curso haverá reembolso de até 30% do valor contratual pago
                                                        (retenção de 70%).</td>
                                                </tr>
                                                <tr>
                                                    <td width="60">6.5.1.4.</td>
                                                    <td width="450">Quando a desistência ocorrer após a chegada ao País
                                                        do destino, não haverá em nenhuma hipótese reembolso.</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50">6.5.2.</td>
                                        <td width="510">Os valores pagos referentes à matrícula, exame final
                                            obrigatório, material didático e seguro saúde não serão reembolsáveis em
                                            nenhum momento.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="35">6.6.</td>
                            <td width="565"><b>REEMBOLSO POR CANCELAMENTO DO CURSO:</b> Ocorrendo o cancelamento do
                                programa/curso contratado, e sendo esse cancelamento pela Escola ou Instituição
                                Internacional, não haverá direito adquirido a INDENIZAÇÃO a ser requerido a OK
                                INTERCÂMBIO por parte do CONTRATANTE, uma vez que a contratada não incorreu em erro ou
                                danos para torná-los indenes, mas reembolsará o CONTRATADO em 50% do valor pactuado, em
                                até 45 (quarenta e cinco) dias a contar do aviso da escola.</td>
                        </tr>
                        <tr>
                            <td width="35">6.7.</td>
                            <td width="565"><b>REEMBOLSO POR ATRASO DO VOO:</b> Havendo o atraso do voo em alguma
                                cidade, deve o CONTRATANTE entrar em contato com a OK INTERCÂMBIO e avisar sobre o
                                atraso sob pena de perder o Translado contratado, o qual não ocasionará reembolso.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">7.</p>
                </td>
                <td width="605">
                    <p class="s4">DO CURSO</p>
                    <table>
                        <tr>
                            <td width="35">7.1.</td>
                            <td width="565">No início do curso, o CONTRATANTE será submetido na escola a um teste de
                                nível para aferição do seu grau de conhecimento linguístico, e a sua inclusão em uma
                                turma do mesmo nível.</td>
                        </tr>
                        <tr>
                            <td width="35">7.2.</td>
                            <td width="565">Caso o CONTRATANTE não possua o nível indicado em sua ficha, será submetido
                                a turma em que seja possível a melhoria e o desenvolvimento de seu idioma.</td>
                        </tr>
                        <tr>
                            <td width="35">7.3.</td>
                            <td width="565">O CONTRATANTE afirma ter conhecimento que somente receberá o certificado se
                                tiver a frequência mínima e a nota suficiente pela Escola.</td>
                        </tr>
                        <tr>
                            <td width="35">7.4.</td>
                            <td width="565">Poderá haver a alteração do curso, por solicitação do aluno se for em
                                relação a: a) data de início do curso, b) Escola, c) País de destino ou d) acomodação,
                                sendo aplicável o câmbio do dia da contratação do programa quando resultar devolução de
                                dinheiro ao CONTRATANTE, mas se houver a necessidade de pagamento de valores pelo
                                contratante, será aplicável o câmbio do dia deste novo pagamento.</td>
                        </tr>
                        <tr>
                            <td width="35">7.5.</td>
                            <td width="565">Ocorrendo a solicitação com antecedência mínima de 30 (trinta) dias poderá
                                haver a alteração da de início do curso e havendo a redução do preço do programa para a
                                nova data ou preço promocional, não haverá reembolso ao Contratante pois, as escolas não
                                devolvem qualquer valor.</td>
                        </tr>
                        <tr>
                            <td width="35">7.6.</td>
                            <td width="565">A instituição se reserva no direito de alterar horários dentro do período
                                contratado, turmas ou realizar mudança de sede (campus), baseando-se em disponibilidade
                                de vagas e capacidade do local, caso o CONTRATANTE falte às aulas por motivos pessoais,
                                ou haja perda de conteúdo por motivo de feriados ou de Força Maior, caberá a cada
                                Instituição decidir por repor ou não as aulas, sem qualquer intervenção ou
                                responsabilidade da CONTRATADA.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">8.</p>
                </td>
                <td width="605">
                    <p class="s4">DO PROGRAMA CONTRATADO</p>
                    <table>
                        <tr>
                            <td width="35">8.1.</td>
                            <td width="565">Abaixo especificadas as informações do programa contratado:<br />
                                <table>
                                    <tr>
                                        <td width="50">8.1.1.</td>
                                        <td width="510"><b>DETALHES DO DESTINO:</b><br />
                                            <table cellspacing="1">
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">País de destino:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['País']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Cidade de destino:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Cidade']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Instituição de destino:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Instituição']}}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.1.2.</td>
                                        <td width="510"><b>DETALHES DO CURSO:</b><br />
                                            <table cellspacing="1">
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Tipo do Curso:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Tipo do curso']}}</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Valor do curso']}} {{$proposta['Moeda do destino']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Turma:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Turma do curso']}}</td>
                                                    <td></td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Duração do Curso:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Duração do curso']}}</td>
                                                    <td></td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Carga Horária:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Carga horária do curso']}}</td>
                                                    <td></td>
                                                </tr>
                                                @foreach ($taxas as $index => $taxa)
                                                    <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                        @if ($index == 0)
                                                            <td bgcolor="#F69646" class="s1" rowspan="{{count($taxas)}}">Taxa:</td>
                                                        @endif
                                                        <td bgcolor="#FCE4CD">{{$taxa['Descrição']}}</td>
                                                        <td bgcolor="#FCE4CD">{{$taxa['Valor']}} {{$taxa['Moeda']}}</td>
                                                    </tr>
                                                    @endforeach
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.1.3.</td>
                                        <td width="510"><b>DETALHES DOS SERVIÇOS:</b><br />
                                            <table cellspacing="1">
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Acomodação:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Tipo de acomodação']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Duração/Valor:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Duração da acomodação']}}</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Valor da acomodação']}} {{$proposta['Moeda do destino']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Taxa:</td>
                                                    
                                                    <td bgcolor="#FCE4CD">{{$proposta['Descrição da taxa de acomodação']}}</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Taxa de acomodação']}} {{$proposta['Moeda do destino']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Agência:</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Descrição da agência da acomodação']}}</td>
                                                    <td bgcolor="#FCE4CD">{{$proposta['Agência da acomodação']}} {{$proposta['Moeda do destino']}}</td>
                                                </tr>
                                            </table>
                                            <table cellspacing="1">
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Total por pessoa em {{$proposta['Moeda do destino']}}:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Total por pessoa']}} {{$proposta['Moeda do destino']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Câmbio moeda:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Câmbio']}}</td>
                                                </tr>
                                                <tr
                                                    style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                                    <td bgcolor="#F69646" class="s1">Total por pessoa em {{$proposta['Moeda do contratante']}}:</td>
                                                    <td bgcolor="#FCE4CD" colspan="2">{{$proposta['Total por pessoa']*$proposta['Câmbio']}} {{$proposta['Moeda do contratante']}}</td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="35">8.2.</td>
                            <td width="565">O ato de matrícula para qualquer um dos programas oferecido pela CONTRATADA
                                implica na aceitação expressa de todas as cláusulas deste documento.</td>
                        </tr>
                        <tr>
                            <td width="35">8.3.</td>
                            <td width="565">Para que haja a segurança jurídica de reserva de vaga no programa desejado,
                                o CONTRATANTE deverá realizar o pagamento de uma entrada no percentual mínimo de 10%
                                (dez por cento) do valor total do programa, através de uma das formas possíveis: boleto
                                bancário, cartão de crédito/débito ou transferência bancária, que não são cabíveis de
                                REEMBOLSO havendo a desistência no programa solicitado.</td>
                        </tr>
                        <tr>
                            <td width="35">8.4.</td>
                            <td width="565">O programa contratado tem como data prevista de embarque no mês de  e como prazo máximo o mês de .</td>
                        </tr>
                        <tr>
                            <td width="35">8.5.</td>
                            <td width="565">Após o prazo estipulado na cláusula acima, o CONTRATANTE fica ciente que
                                será cobrada uma taxa de R$ 350,00 reais (), além da possível
                                variação dos preços cobrados pela instituição e demais serviços contratados, além da
                                diferença de câmbio.</td>
                        </tr>
                        <tr>
                            <td width="35">8.6.</td>
                            <td width="565">Ao final do pagamento do programa, ora contratado, o CONTRATANTE poderá
                                prorrogar o presente contrato por mais 12 (doze) meses a contar da assinatura do aditivo
                                para a continuidade do Intercâmbio, após pagamento dos reajustes necessários.</td>
                        </tr>
                        <tr>
                            <td width="35">8.7.</td>
                            <td width="565">Se a Instituição escolhida, por caso fortuito ou força maior não ofertar
                                vagas para o programa pretendido ou ainda encerrar suas atividades, a CONTRATADA se
                                responsabiliza em realizar a matrícula do CONTRATANTE/ ESTUDANTE, de imediato, em uma
                                Instituição do mesmo nível, tempo de permanência, mantendo o valor inicial pactuado
                                acrescido da diferença financeira, caso haja, entre as escolas.</td>
                        </tr>
                        <tr>
                            <td width="35">8.8.</td>
                            <td width="565">As datas de chegada e saída da cidade onde será realizado o curso deverão
                                coincidir com o início e o encerramento da acomodação contratada, ficando sob a
                                responsabilidade do CONTRATANTE, a solicitação de diárias extras necessárias, caso não
                                coincidam.</td>
                        </tr>
                        <tr>
                            <td width="35">8.9.</td>
                            <td width="565">O não comparecimento ou desistência da acomodação por vontade do
                                CONTRATANTE, não enseja o Reembolso.</td>
                        </tr>
                        <tr>
                            <td width="35">8.10</td>
                            <td width="565">O CONTRATANTE preferencialmente será recepcionado no aeroporto mais próximo
                                e transportado para a sua escola ou acomodação, devendo este serviço (traslado
                                receptivo) ser solicitado juntamente com o programa do curso, caso não esteja incluso.
                            </td>
                        </tr>
                        <tr>
                            <td width="35">8.11</td>
                            <td width="565">Qualquer alteração que implique na alteração do embarque por vontade do
                                CONTRATANTE deverá ser solicitada, por e-mail no prazo de 60 (sessenta) dias anteriores
                                à data prevista, diretamente a CONTRATADA.</td>
                        </tr>
                        <tr>
                            <td width="35">8.12</td>
                            <td width="565">As alterações decorrentes de mudanças climáticas e condições meteorológicas,
                                ou outra condição que implique na impossibilidade de embarque ou desembarque, não
                                correrão por culpa da CONTRATADA.</td>
                        </tr>
                        <tr>
                            <td width="35">8.13</td>
                            <td width="565">Quando a acomodação for em homestay (casa de família) aplicam-se as
                                seguintes observações:<br />
                                <table>
                                    <tr>
                                        <td width="50">8.13.1.</td>
                                        <td width="510">Em sua maioria, as casas de família estão situadas em bairros
                                            residenciais, com percurso de aproximadamente 30 – 60 minutos até as
                                            escolas, podendo variar esse tempo de acordo com horários de trânsito mais
                                            elevado.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.2.</td>
                                        <td width="510">Quanto a alimentação, as porções e variedades serão definidas
                                            pela família, portanto, o CONTRATANTE não poderá se servir sozinho ou
                                            escolher o cardápio.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.3.</td>
                                        <td width="510">A duração dos banhos será definida pela homestay/família.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.4.</td>
                                        <td width="510">A quantidade de alunos, brasileiros ou não acomodados na casa de
                                            família será definida pela homestay, salvo o CONTRATANTE custear situação
                                            diversa, desde que haja disponibilidade de vaga, não podendo a CONTRATADA
                                            intervir ou interferir nas regras deste prestador de serviço.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.5.</td>
                                        <td width="510">O endereço e o perfil da família poderão ser enviados pela
                                            CONTRATADA (Escola) até 10 dias antes do embarque, sendo que não há garantia
                                            que a família será completamente nativa (mãe, pai e filhos).</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.6.</td>
                                        <td width="510">Quaisquer RECLAMAÇÕES referentes a homestay deverão ser feitas
                                            diretamente a escola. Após análise da escola, a eventual necessidade de
                                            troca de família será efetuada de acordo com a disponibilidade de outra
                                            homestay, podendo acarretar a precisão de mais tempo para acomodar o
                                            CONTRATANTE.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.7.</td>
                                        <td width="510">Caso o aluno opte por este tipo de acomodação, às regras de
                                            depósito de segurança, limpeza, uso de áreas comuns serão definidos pela
                                            instituição de ensino ou empresa especializada por esta prestação de
                                            serviços.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.8.</td>
                                        <td width="510">A disponibilidade de internet será disponível mediante cobrança
                                            de taxa estipulada pela homestay.</td>
                                    </tr>
                                    <tr>
                                        <td width="50">8.13.9.</td>
                                        <td width="510">As roupas do CONTRATANTE serão lavadas pelo próprio aluno em
                                            dias e horários determinados pela homestay.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="35">8.14.</td>
                            <td width="565">Quando a acomodação for ofertada pela Escola ou empresa especializada o
                                CONTRATANTE estará submetido às regras aplicadas em contrato específico disponibilizado
                                pelo prestador terceirizado.<br />
                                <table>
                                    <tr>
                                        <td width="50">8.14.1.</td>
                                        <td width="510">O CONTRATANTE fica ciente de que é obrigatório o pagamento de
                                            depósito de segurança, que será devolvido no check-out. O valor será de
                                            aproximadamente 100.00€ (), podendo variar de acordo com
                                            as regras da acomodação e deverão ser pagos em moeda estrangeira,
                                            considerando que o pagamento será efetuado diretamente à administração da
                                            acomodação. Fica ciente o CONTRATANTE de que algumas acomodações se reservam
                                            no direito de cobrar taxa de limpeza.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td width="35">8.15</td>
                            <td width="565">Quando a acomodação for em RESIDÊNCIA ESTUDANTIL/HOSTEL: Caso o aluno opte
                                por este tipo de acomodação, a regra de depósito de segurança, limpeza, taxas, o uso de
                                áreas comuns será definido pela instituição de ensino ou empresa especializada por esta
                                prestação de serviços.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="20">
                    <p class="s4">9.</p>
                </td>
                <td width="605">
                    <p class="s4">DO VALOR DO CONTRATO E DO PAGAMENTO</p>
                    <table>
                        <tr>
                            <td width="35">9.1.</td>
                            <td width="565">O valor total contratado do pacote fica estabelecido em ${objeto[0]['Total por pessoa']} ${objeto[0]['Moeda do destino']} na
                                moeda do país de destino, por pessoa, sendo a taxa de câmbio do dia previsto em ${objeto[0]['Câmbio']}
                                totalizando em reais o valor integral de ${objeto[0]['Total por pessoa']*objeto[0]['Câmbio']} ${objeto[0]['Moeda do contratante']} ().</td>
                        </tr>
                        <tr>
                            <td width="35">9.2.</td>
                            <td width="565">O valor será pago da seguinte forma:<br />
                                @if(count($parcelas) > 0)
                                    <table cellspacing="1">
                                        <tr
                                            style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                            <td bgcolor="#F69646" class="s1" style="text-align: center;" colspan="3">Entrada</td>
                                        </tr>
                                        <tr
                                            style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                            <td bgcolor="#FCE4CD">Valor:</td>
                                            <td colspan="2">${objeto[0]['Valor da entrada']}</td>
                                        </tr>
                                        <tr
                                            style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                            <td bgcolor="#FCE4CD">Data:</td>
                                            <td colspan="2">${objeto[0]['Data da entrada']}</td>
                                        </tr>
                                        <tr
                                            style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                            <td bgcolor="#FCE4CD">Método de Pagamento:</td>
                                            <td colspan="2">${objeto[0]['Tipo de pagamento da entrada']}</td>
                                        </tr>
                                    </table>
                                    <p>E {{count($parcelas)}} ({{numbertoWord(count($parcelas))}}) parcelas, via {{$proposta['Tipo de pagamento da parcela']}}, conforme a tabela abaixo:</p>
                                    <table cellspacing="1">
                                        <tr style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                            <td bgcolor="#F69646">Parcela:</td>
                                            <td bgcolor="#FCE4CD">${objeto[0]['Número da parcela']}</td>
                                            <td bgcolor="#F69646" colspan="2">Com vencimento para:</td>
                                            <td bgcolor="#FCE4CD">${objeto[0]['Data do pagamento da parcela']}</td>
                                        </tr>
                                    </table>
                                @else
                                    
                                <table cellspacing="1">
                                    <tr
                                        style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                        <td bgcolor="#F69646" class="s1" style="text-align: center;" colspan="3">À VISTA</td>
                                    </tr>
                                    <tr
                                        style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                        <td bgcolor="#FCE4CD">Valor:</td>
                                        <td colspan="2">${objeto[0]['Valor da entrada']}</td>
                                    </tr>
                                    <tr
                                        style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                        <td bgcolor="#FCE4CD">Data:</td>
                                        <td colspan="2">${objeto[0]['Data da entrada']}</td>
                                    </tr>
                                    <tr
                                        style="border-bottom-style:solid;border-bottom-width:2pt;border-bottom-color:#FFFFFF">
                                        <td bgcolor="#FCE4CD">Método de Pagamento:</td>
                                        <td colspan="2">${objeto[0]['Tipo de pagamento da entrada']}</td>
                                    </tr>
                                </table>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td width="35">9.3.</td>
                            <td width="565">O valor referente ao presente contrato encontra-se em Moeda Nacional (Real)
                                e com menção a Moeda do País de destino do Intercâmbio do CONTRATANTE.</td>
                        </tr>
                        <tr>
                            <td width="35">9.4.</td>
                            <td width="565">As taxas de câmbio são estabelecidas pelo BANCO CENTRAL DO BRASIL, e serão
                                aplicadas de acordo com o dia da assinatura do contrato.</td>
                        </tr>
                        <tr>
                            <td width="35">9.5.</td>
                            <td width="565">Ocorrendo algum fato superveniente que altere o valor da taxa cambial
                                incidente neste contrato, haverá a sua atualização nas parcelas vincendas.</td>
                        </tr>
                        <tr>
                            <td width="35">9.6.</td>
                            <td width="565">O atraso no pagamento do parcelamento, sendo esta a forma escolhida,
                                acarretará a incidência de multa compensatória no percentual de 2% (dois por cento)
                                sobre os valores devidos e reemissão do boleto bancário, acrescido de juros de 1% (um
                                por cento) ao mês e correção monetária.</td>
                        </tr>
                        <tr>
                            <td width="35">9.7.</td>
                            <td width="565">O atraso no pagamento superior a 60 (sessenta) dias a contar do vencimento
                                da parcela, ocasionará ao CONTRATANTE a incidência de juros e multas no percentual
                                estabelecido no item 9.5 acrescidos de reajuste de taxa cambial e do valor total do
                                pacote e o incremento da taxa administrativa de R$ 350,00 reais()
                                para reativação do contrato.</td>
                        </tr>
                        <tr>
                            <td width="35">9.8.</td>
                            <td width="565">Caso o atraso supere os 90 (noventa) dias, sem que haja prévia comunicação
                                ou justificativa a CONTRATADA, está caracterizado o inadimplemento total das obrigações
                                do CONTRATANTE, cabendo a CONTRATADA rescindir o contrato, requerendo ao CONTRATANTE o
                                adimplemento das obrigações vencidas acrescidas de multas e juros estabelecidos no item
                                9.5.</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td width="30">
                    <p class="s4">10.</p>
                </td>
                <td width="595">
                    <p class="s4">DAS DISPOSIÇÕES FINAIS</p>
                    <table>
                        <tr>
                            <td width="35">10.1</td>
                            <td width="565">Havendo alterações na programação por Força Maior ou Caso Fortuito, tais
                                como: catástrofes, conflitos sociais, guerras, epidemias e outros, que coloquem em risco
                                a segurança do CONTRATANTE e que afetem de forma parcial ou total algum item da viagem,
                                a CONTRATADA comunicará por escrito ao CONTRATANTE a impossibilidade de continuidade do
                                contrato das condições acordadas, e se reserva ao direito de promover as alterações que
                                se fizerem necessárias no sentido de cumprir o contrato, caso seja do interesse do
                                CONTRATANTE, modificando datas, horários e serviços, não ficando obrigada a restituição
                                dos valores pagos.</td>
                        </tr>
                        <tr>
                            <td width="35">10.2</td>
                            <td width="565">O valor da taxa administrativa de R$ 350,00 reais ()
                                aplicar-se-á sempre que necessária a alteração contratual acrescida de taxas
                                administrativas por parte de escola, acomodação ou qualquer outra instituição
                                relacionada ao intercâmbio. Seja gratuita ou onerosa, a alteração deverá ser requerida
                                por escrito via email à CONTRATADA.</td>
                        </tr>
                        <tr>
                            <td width="35">10.3</td>
                            <td width="565">Se alguma cláusula deste instrumento for considerada ilegal, nula ou incapaz
                                de ser cumprida por qualquer motivo, esta previsão será considerada uma cláusula
                                independente da parte remanescente deste contrato e não afetará a validade ou a
                                aplicabilidade do cumprimento integral do contrato.</td>
                        </tr>
                        <tr>
                            <td width="35">10.4</td>
                            <td width="565">O CONTRATANTE declara expressamente estar ciente e de acordo com as
                                condições do programa, as quais se encontram devidamente detalhadas na programação da
                                viagem.</td>
                        </tr>
                        <tr>
                            <td width="35">10.5</td>
                            <td width="565">Fica a OK INTERCÂMBIO autorizada pelo CONTRATANTE, desde já, a captar a voz
                                e/ou imagem do ESTUDANTE durante a participação dele no aludido programa, fazendo uso de
                                tal material em peças publicitárias ou institucionais, a serem veiculadas nas mais
                                diversas plataformas digitais, em todo o território nacional e por prazo indeterminado,
                                sendo tal autorização dada a título gratuito e em caráter irrevogável.</td>
                        </tr>
                        <tr>
                            <td width="35">10.6</td>
                            <td width="565">O presente instrumento obriga as partes e seus sucessores, a qualquer
                                título, não pode ser cedido ou transferido sem prévia e escrita aprovação da outra
                                parte.</td>
                        </tr>
                        <tr>
                            <td width="35">10.7</td>
                            <td width="565">Fica eleito o foro da cidade de Fortaleza CE, local este onde fora
                                contratado o presente instrumento, para dirimir qualquer dúvida oriunda do presente
                                instrumento, excluindo as partes contratantes, conjuntamente, qualquer outro, por mais
                                privilegiado que seja.</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <p>E por estarem justas e contratadas, firmam as partes o presente instrumento em duas vias de igual teor e
            forma, na presença de testemunhas supra identificadas.</p>
        <h1 style="padding-left: 213pt;text-indent: 0pt;text-align: center;">Fortaleza, (incluir data do dia)</h1>
        <table cellspacing="1">
          <tr>
              <td style="text-align: center;"></td>
              <td style="text-align: center;"><img src="https://okintercambio.com.br/wp-content/uploads/2023/02/assinatura.png"/></td>
          </tr>
      </table>
      <table cellspacing="1">
        <tr>
            <td style="text-align: center;"><h1>_____________________________________<br/>CONTRATANTE <br/>Nome completo: ${objeto[0]['Nome completo']}<br/>CPF: ${objeto[0]['CPF']}</h1></td>
            <td style="text-align: center;"><h1>_____________________________________<br/>Empresa OK INTERCÂMBIO<br/> VIAGENS E TURISMO LTDA <br/>CNPJ: 23.263.680/0001-31</h1></td>
        </tr>
    </table>
    </main>
</body>

</html>
  `;

        // Opções para a conversão HTML para PDF
        const options = {
            format: 'A4',
            border: {
                top: '1cm',
                right: '1cm',
                bottom: '1cm',
                left: '1cm',
            },
        };

        // Gere o PDF diretamente a partir do modelo HTML com os estilos CSS aplicados
        pdf.create(htmlContent, options).toFile('contrato.pdf', (error) => {
            if (error) {
                console.error('Erro ao gerar PDF:', error);
            } else {
                console.log('PDF gerado com sucesso!');
            }
        });
    };
}
export default new gerar_pdf();
