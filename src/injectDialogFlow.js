// src/clientModules/injectDialogflow.js

export function onRouteDidUpdate({location, previousLocation}) {
    // Prevent adding multiple times during SPA navigation or hot reloads
    if (document.querySelector('df-messenger')) {
      return;
    }
  
    // Create df-messenger element
    const dfMessenger = document.createElement('df-messenger');
    dfMessenger.setAttribute('project-id', 'dev-dhbalaji-ai-chat');
    dfMessenger.setAttribute('agent-id', 'e03ac926-b8a2-4f6b-93f4-100854247b6e');
    dfMessenger.setAttribute('language-code', 'en');
    dfMessenger.setAttribute('max-query-length', '-1');
    dfMessenger.setAttribute('allow-feedback', 'all');
    dfMessenger.setAttribute('expand', 'true');
  
    // Create chat bubble
    const chatBubble = document.createElement('df-messenger-chat-bubble');
    chatBubble.setAttribute('chat-title', 'dhbalaji assistant');
    dfMessenger.appendChild(chatBubble);
  
    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      df-messenger {
        z-index: 999;
        position: fixed;
        --df-messenger-font-color: #000;
        --df-messenger-font-family: Google Sans;
        --df-messenger-chat-background: #f3f6fc;
        --df-messenger-message-user-background: #d3e3fd;
        --df-messenger-message-bot-background: #fff;
        bottom: 16px;
        right: 16px;
      }
    `;
  
    // Append elements to the body
    document.body.appendChild(dfMessenger);
    document.body.appendChild(style);
  }