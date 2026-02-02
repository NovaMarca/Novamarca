# site-novamarca

Este repositório contém o site estático da Nova Marca (páginas HTML, CSS inline e assets).

Resumo por página — o que tem e o que foi feito

- `index.html`:
	- Conteúdo: página inicial com hero, seções de serviços, depoimentos, blog destacado, CTA e rodapé com contatos.
	- Componentes: navegação fixa, múltiplos CTAs via WhatsApp, cards de serviços, seção de blog e footer com mapa do site.
	- Observações: estrutura principal do site; integrações visuais via Tailwind CDN e Font Awesome.

- `internacional.html`:
	- Conteúdo: página sobre registro internacional de marcas, seções explicativas, clientes, países onde atuam e CTA.
	- Mudanças aplicadas:
		- Botão flutuante de tradução funcional (4 idiomas: `pt`, `en`, `es`, `fr`) sem uso do Google Translate.
		- Sistema de i18n client-side: elementos marcados com `data-i18n` e dicionários embutidos no próprio HTML.
		- Persistência do idioma selecionado via `localStorage` e ajuste do atributo `lang` do `html`.
		- Seção de clientes revisada para usar os 5 logos reais em `assets/logos`.
		- Estilização: logos aumentados, fundo da área de clientes escurecido (`bg-gray-300`), caixas internas brancas e animação de hover (`transform: translateY(-0.2rem)` com `transition: 0.2s ease`).

- `marcas.html`:
	- Conteúdo: explicação sobre registro de marca, benefícios, processo simplificado, FAQs e CTAs para contato/registro.
	- Componentes: guias de processo, seção FAQ com perguntas expansíveis e CTAs para WhatsApp.

- `patentes.html`:
	- Conteúdo: explicação sobre tipos de patentes, benefícios, processo e FAQs relacionados a patentes.
	- Componentes: hero específico para patentes, etapas do processo e CTAs.

- `monitoramento-marcas.html`:
	- Conteúdo: serviço de monitoramento de marcas (vigilância, relatórios, alertas e gestão de prazos).
	- Componentes: benefícios, processos e CTAs para contratação/consulta.

- `busca-anterioridade.html`:
	- Conteúdo: serviço de busca de anterioridade no INPI, vantagens e lógica do processo.
	- Componentes: explicação passo-a-passo, CTA para solicitar a busca.

- `assets/logos`:
	- Arquivos usados pelos exemplos de clientes:
		- `furaco_pet_logo.jpg`
		- `Engemasa-logo.png`
		- `cafMaquinas-logo.png`
		- `wiseConfort-logo.png`
		- `bioArt-logo.png`

Como validar rapidamente:
- Abra `internacional.html` no navegador local e teste o botão flutuante — escolha um idioma e confirme que os textos mudam sem recarregar a página.
- Navegue pelas páginas (`index.html`, `marcas.html`, `patentes.html`, `monitoramento-marcas.html`, `busca-anterioridade.html`) e confira os CTAs de WhatsApp e as seções descritas.

Próximos passos sugeridos (opcional):
- Ajustar tamanhos/cores dos logos — informe o `px` ou a cor (hex / classe Tailwind) desejada.
- Internacionalizar mais conteúdos (ex.: `alt` de imagens) se necessário.

Se quiser, atualizo o README com instruções de deploy (ex.: GitHub Pages) ou faço alterações visuais adicionais nas páginas.

