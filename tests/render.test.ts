import { describe, expect, it } from 'vitest';
import { renderChatThread } from '../src/views/render';

describe('renderChatThread', () => {
  it('renders escaped markup', () => {
    const html = renderChatThread([
      { role: 'user', content: '<script>alert(1)</script>', timestamp: new Date().toISOString() }
    ]);

    expect(html).toContain('&lt;script&gt;alert(1)&lt;/script&gt;');
    expect(html).not.toContain('<script>');
  });
});
