import { describe, expect, it } from 'vitest';
import { renderChatMessage } from '../src/views/render';

describe('renderChatMessage assistant alignment', () => {
  it('renders assistant messages aligned to the left', () => {
    const html = renderChatMessage({
      role: 'assistant',
      content: 'hi',
      timestamp: new Date().toISOString()
    });

    expect(html).toContain('message-row assistant');
    expect(html).toContain('message-bubble');
  });
});
