import type { ChatMessage } from '../chat/mockChat';

export function renderChatMessage(message: ChatMessage): string {
  const align = message.role === 'user' ? 'user' : 'assistant';

  return `
    <div class="message-row ${align}">
      <article class="message-bubble">
        <p>${escapeHtml(message.content)}</p>
      </article>
    </div>
  `;
}

export function renderChatThread(messages: ChatMessage[]): string {
  return messages.map(renderChatMessage).join('\n');
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
