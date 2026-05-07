# Déploiement GitHub Pages

Ce site est conçu pour être hébergé sur GitHub Pages à l'URL **`https://<user>.github.io/h-mo/`**.

## 1. Configurer le repo

1. Pousse ce projet sur un repo nommé **`h-mo`**.
2. Dans **Settings → Pages**, choisis **Source: GitHub Actions**.

## 2. Configurer le formulaire de contact (Google Apps Script)

Le formulaire envoie les messages à un Apps Script Web App qui ajoute une ligne dans le Google Sheet.

### Étape A — Créer le script

1. Ouvre ton Sheet : <https://docs.google.com/spreadsheets/d/1WDLWOm3KdaKHWnEOjCRKi5kLMdoW_mwPNv9_2LWrX1Q/edit>
2. Menu **Extensions → Apps Script**.
3. Remplace le contenu de `Code.gs` par :

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(
      "1WDLWOm3KdaKHWnEOjCRKi5kLMdoW_mwPNv9_2LWrX1Q"
    ).getSheets()[0];

    sheet.appendRow([
      data.date || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.function || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. **Déployer → Nouveau déploiement** → type **Application Web**.
   - Exécuter en tant que : **moi**
   - Accès : **Tous les utilisateurs** (ou "Tous, même anonymes")
5. Copie l'URL qui se termine par `/exec`.

### Étape B — Renseigner l'URL dans GitHub

Dans le repo GitHub : **Settings → Secrets and variables → Actions → New repository secret**

- Nom : `VITE_CONTACT_ENDPOINT`
- Valeur : l'URL `/exec` copiée à l'étape A

### Étape C — Test local (optionnel)

Crée un `.env.local` à la racine :

```
VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/.../exec
```

## 3. Déployer

À chaque `push` sur `main`, le workflow `.github/workflows/deploy.yml` :
- build le site en SPA statique avec base `/h-mo/`
- publie le dossier `dist/client` sur GitHub Pages
