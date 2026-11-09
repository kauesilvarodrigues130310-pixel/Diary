# Penumbra — um espaço só seu

Diário pessoal que funciona offline, guarda tudo só no seu aparelho e pode ser trancado com senha.
Sem contas, sem servidor, sem rastreadores, sem nenhum recurso externo (nem fontes).

## Arquivos
```
index.html            tela única do app
manifest.webmanifest  nome, cores e ícones (instalação na tela inicial)
sw.js                 service worker: guarda os arquivos para abrir sem internet
css/style.css         visual
js/data.js            emoções, frases e perguntas padrão
js/store.js           banco local (IndexedDB), criptografia e backup
js/ui.js              componentes de interface
js/audio.js           som ambiente (gerado no aparelho, sem arquivos de áudio)
js/app.js             telas: início, diário, calendário, sentimentos, memórias, estatísticas
js/editors.js         escrita, desabafo, cartas, espaços, reflexões, botão de calma
js/settings.js        configurações, bloqueio, backup
js/main.js            inicialização
icons/                ícones
```

## 1. Publicar (uma vez só) — precisa de endereço https
O navegador só libera instalação, funcionamento offline e criptografia em endereço **https**
(abrir o arquivo direto do celular não funciona). O jeito gratuito mais simples:

1. Crie uma conta no GitHub (github.com) e um repositório **público** novo, ex.: `meu-diario`.
   O repositório guarda só o *programa*, nunca seus textos.
2. Envie todos os arquivos desta pasta, mantendo as subpastas (`css`, `js`, `icons`).
3. Em **Settings → Pages**, escolha *Deploy from a branch → main → / (root)* e salve.
4. Em ~1 min o endereço fica pronto: `https://SEU-USUARIO.github.io/meu-diario/`.

(Alternativas equivalentes: Netlify, Cloudflare Pages. Qualquer hospedagem estática com https serve.)
Para testar no computador: `python3 -m http.server 8000` e abrir `http://localhost:8000`.

## 2. Instalar no Galaxy A03 Core
1. Abra o endereço no **Chrome**.
2. Espere carregar por completo uma vez (ele guarda os arquivos para uso offline).
3. Menu **⋮ → Instalar app** (ou *Adicionar à tela inicial*). Confirme.
4. Abra pelo ícone. Daqui em diante funciona sem internet.

Na primeira abertura você escolhe o nome do diário, como quer ser chamado(a) e, se quiser, uma senha.

## 3. Backup — faça com frequência
**Configurações → Backup e restauração → Exportar backup criptografado.**
Escolha uma senha para o arquivo e salve. Guarde o arquivo **fora do celular** (Google Drive,
e-mail para você mesmo, computador). Para restaurar: **Importar backup**
(ou, num app vazio, **Já tenho um backup — restaurar**), escolha o arquivo e digite a senha dele.

⚠️ **Limpar dados do navegador/Chrome, desinstalar o app ou "Apagar todos os dados" apagam o diário
deste aparelho.** Sem backup, não há como recuperar. O app avisa há quanto tempo foi o último backup.

## 4. Como os dados são guardados e protegidos
- **Onde:** IndexedDB do navegador, dentro do aparelho. Nada é enviado a lugar nenhum.
- **Com senha:** cada registro é cifrado com **AES-256-GCM**. A chave é derivada da senha com
  **PBKDF2-SHA256 (150 mil iterações)** e um sal aleatório. A senha **nunca é guardada**: o app só
  confirma que ela está certa tentando decifrar um item de teste. No banco não há texto legível
  (testado: títulos e textos não aparecem nos dados brutos).
- **Esqueceu a senha?** Não há recuperação (é isso que a torna segura). Use o backup.
- **Bloqueio automático** por inatividade (tempo configurável) e ao sair do app; os dados saem da memória ao bloquear.
- **Sem senha:** os dados ficam guardados, mas sem criptografia. Dá para definir depois.
- **Backup criptografado:** o arquivo `.cript.json` usa a mesma cifra, com a senha que você escolher.
  O backup "sem criptografia" é texto puro — evite.
- Limitação honesta: quem tiver o celular **desbloqueado** e o diário **aberto** vê tudo, e a criptografia
  não protege contra um aparelho já comprometido por outro programa.

## 5. O que existe
Início (saudação, frase do dia, calendário, última entrada) · Diário (entradas, calendário, linha do tempo,
busca, filtros por data/emoção/favoritos, imagens, tags, intensidade 1–10, salvamento automático, rascunhos)
· Sentimentos (15 emoções + personalizadas, perguntas opcionais, estatísticas só com o que você registrou)
· Memórias (favoritas, reflexões sem repetir, cartas lacradas por data, cápsula do tempo, coisas que nunca disse,
pequenas coisas boas, momentos, mural, sonhos, pensamentos soltos) · Preciso desabafar · Botão de calma
(respiração, aterramento, pessoa de confiança) · Configurações (nome, cor, tema, fonte, bloqueio, lembrete, som).

## Limitações técnicas
- **Lembretes:** um site instalado não consegue notificar com o app fechado de forma confiável no Android.
  Alternativa implementada: gerar um lembrete diário no calendário do celular (arquivo .ics).
- **Som ambiente:** gerado por código (sem baixar nada), então é simples e leve; não toca música do aparelho.
- **Imagens:** reduzidas antes de guardar para não pesar; entram no backup.
- Atualizar o app: ao publicar versão nova, mude `CACHE` em `sw.js` (ex.: `penumbra-v4`).
