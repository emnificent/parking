// manage form
import { fail } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    if (!data.get('domain') || !data.get('email') || !data.get('message')) return;

    const body = {
      username: 'Domain purchase offer',
      content: `# ${data.get('domain')}\nEmail: ${data.get('email')}\n${data.get('message')}`
    };

    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  
    try {
      // please don't abuse the hook, thanks
      const response = await fetch('https://discord.com/api/webhooks/1164582023344705576/Awp2CKUZJrYaDG89NSfIfkBkcE46vig74maxEHuttQ5czTDYGj1VCsuz9xs7eyIk4HBH', options);
  
      if (!response.ok) {
        return fail(500, {
          error: true,
          details: {
            status: response.status,
            message: response.statusText,
          },
        });
      }
      return {success: true};
    } catch (error) {
      return fail(500, {
        error: true,
        details: error,
      });
    }
  }
}