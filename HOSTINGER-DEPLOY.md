# Deploy NEXTERAWEB pe Hostinger (Next.js)

Copiază valorile de mai jos în panoul aplicației Node / Web App. **Comanda de pornire** e de obicei într-o secțiune separată, mai jos față de compilare.

## General

| Setare | Valoare |
|--------|---------|
| Preset / framework | Next.js |
| Branch | `main` |
| Versiune Node | `22.x` |
| Director root | `./` |

## Setări de compilare și ieșire

| Setare | Valoare |
|--------|---------|
| Comandă de compilare | `npm run build` |
| Manager de pachete | `npm` |
| Directorul de ieșire | `.next` |

## Pornire aplicație (obligatoriu)

| Setare | Valoare |
|--------|---------|
| Comandă de pornire / Start / Run | `npm run start` |

`npm run start` rulează `scripts/start-production.cjs`: pornește build-ul **standalone** (CSS și `public` incluse) și forțează ascultarea pe `0.0.0.0` ca să meargă prin proxy-ul Hostinger.

## Variabile de mediu

| Cheie | Valoare |
|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://nexteraweb.ro` |

Opțional, dacă instalarea pe server se plânge de patch-ul local Next (Mac): `SKIP_PATCH_NEXT_NETWORK_HOST` = `1`

## După modificări

Salvează setările, apoi **Redeploy**. Testează site-ul într-o fereastră privată (fără cache vechi).
