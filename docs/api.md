# Elaracode — API & Integration Documentation

> **Integration Reference**  
> Documents external endpoints, data contracts, client-side persistence, and future backend integration standards.

---

## 1. External Lead Intake API

The application connects to [FormSubmit.co](https://formsubmit.co) for serverless lead capture. This eliminates the need for an always-on backend server while maintaining form submission capabilities.

### 1.1 Endpoint Specification

- **URL:** `https://formsubmit.co/ajax/elaracode1@gmail.com`
- **Method:** `POST`
- **Content Type:** `application/json`
- **Accept:** `application/json`

### 1.2 Request Payload Schema

```json
{
  "_subject": "New Strategic Project Brief from <name>",
  "_template": "table",
  "_captcha": "false",
  "name": "Alex Mercer",
  "email": "alex@enterprise.com",
  "budget": "₹50,000 – ₹1,50,000 (Comprehensive Build / Redesign)",
  "services": "Web Development, Organic SEO",
  "brief": "Full technical rebuild of fintech portal."
}
```

#### Field Specifications:

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `_subject` | `string` | Yes | Subject line displayed in the intake notification email. |
| `_template` | `string` | Yes | `"table"` instructs FormSubmit to format the email body cleanly. |
| `_captcha` | `string` | Yes | Set to `"false"` to allow frictionless direct AJAX submissions. |
| `name` | `string` | Yes | The prospect's full name. |
| `email` | `string` | Yes | The prospect's business email address. |
| `budget` | `string` | Yes | Selected or prefilled budget tier or custom quote amount. |
| `services` | `string` | Yes | Comma-separated list of selected capabilities. |
| `brief` | `string` | No | Freeform project scope, notes, or prefilled estimate details. |

### 1.3 Response Handling

- **Success (`200 OK`):**
  ```json
  {
    "success": "true",
    "message": "The form was submitted successfully."
  }
  ```
- **Error Behavior:** If the request returns a non-200 status code or the `fetch()` call throws a network error (e.g., ad-blocker or offline connectivity), the frontend triggers the client-side fallback.

---

## 2. Client-Side Fallback Protocol (`mailto:`)

Implemented in [src/components/Contact.jsx:105-112](file:///d:/elara/src/components/Contact.jsx#L105-L112):

When a network failure occurs, the application constructs a standardized `mailto:` link and redirects the user's browser, ensuring no lead is lost:

```javascript
const mailtoSubject = encodeURIComponent(`Project Brief: ${formData.fullName}`);
const mailtoBody = encodeURIComponent(
  `Full Name: ${formData.fullName}\nEmail: ${formData.businessEmail}\nBudget: ${formattedBudget}\nServices: ${selectedServices.join(", ")}\n\nProject Brief:\n${formData.projectDetails}`
);
window.location.href = `mailto:elaracode1@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
```

---

## 3. Client-Side Persistence API

The application does not use server cookies or session stores. All local persistence relies on standard browser `localStorage`:

| Key | Value Type | Allowed Values | Default | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `elara-theme` | `string` | `"light"`, `"dark"` | System preference or `"light"` | Persists theme choice across sessions |

---

## 4. Recommendations for Future Custom API Migration

If migrating from FormSubmit.co to an in-house backend or API service (e.g. Resend, SendGrid, or Next.js Route Handlers):

1. **Recommended Endpoint:** `POST /api/leads`
2. **Security & Validation:**
   - Implement rate limiting (e.g., max 5 requests per IP per 10 minutes via Upstash Redis or Cloudflare Turnstile).
   - Sanitize and validate inputs using Zod or Valibot.
3. **Suggested Response Contract:**
   ```json
   {
     "status": "success",
     "leadId": "lead_98a7f1bc",
     "receivedAt": "2026-10-03T04:54:06Z"
   }
   ```
4. **Environment Variables Required:**
   - `RESEND_API_KEY` (Server-side only)
   - `INTAKE_RECIPIENT_EMAIL` (Server-side only)
