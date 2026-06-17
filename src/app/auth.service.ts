import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'mock_token';

  constructor(private router: Router) {}

  // Mock login: calls a mock API endpoint but accepts any credentials.
  // If the network call fails, it still resolves as successful (per requirement).
  async login(username: string, password: string): Promise<boolean> {
    const payload = { username, password };
    try {
      // Example mock endpoint that echoes back the request. You can change this to your API.
      const resp = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (resp.ok) {
        // Use a mock token regardless of response content
        const token = 'mock-token-' + Date.now();
        localStorage.setItem(this.TOKEN_KEY, token);
        return true;
      }
    } catch (e) {
      // Network or CORS may fail in some environments; still accept login.
    }

    // Fallback: accept login even if the network call failed or returned non-OK
    const token = 'mock-token-' + Date.now();
    localStorage.setItem(this.TOKEN_KEY, token);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
