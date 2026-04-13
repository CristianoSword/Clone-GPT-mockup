import { describe, expect, it } from 'vitest';
import { renderChatMessage } from '../src/views/render';

describe('renderChatMessage user alignment', () => {
  it('renders user messages aligned to the right', () => {
    const html = renderChatMessage({
      role: 'user',
      content: 'hello',
      timestamp: new Date().toISOString()
    });

    expect(html).toContain('message-row user');
    expect(html).toContain('message-bubble');
  });
});
