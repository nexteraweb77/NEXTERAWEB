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

Compilarea folosește **`next build --webpack`** (nu Turbopack), ca să fie mai stabilă pe serverele Hostinger / CI cu memorie limitată.

## Dacă compilarea tot pică pe Hostinger

În **Variabile de mediu** adaugă (build + runtime sau doar build, după ce permite panoul):

| Cheie | Valoare |
|-------|---------|
| `NODE_OPTIONS` | `--max-old-space-size=4096` |

Apoi redeploy.

## Variabile de mediu

| Cheie | Valoare |
|-------|---------|
| `NEXT_PUBLIC_SITE_URL` | `https://nexteraweb.ro` |

Opțional, dacă instalarea pe server se plânge de patch-ul local Next (Mac): `SKIP_PATCH_NEXT_NETWORK_HOST` = `1`

## După modificări

Salvează setările, apoi **Redeploy**. Testează site-ul într-o fereastră privată (fără cache vechi).

## Dacă vezi pagină albă sau doar linkuri fără design

1. **Curăță cache-ul CDN** în hPanel (Hostinger / hCDN): după fiecare deploy nou, un HTML vechi putea cere fișiere `/_next/static/...` care nu mai există → lipsesc CSS-urile. Caută „Purge cache” / „Clear cache” pentru domeniu.
2. Deschide mereu **`https://nexteraweb.ro`** (fără `www`). Până când `www` e legat corect de aceeași aplicație în panou, `www` poate da eroare (ex. 503).
3. În browser: **hard refresh** (Ctrl+Shift+R / Cmd+Shift+R) sau fereastră privată.
4. **Pe iPhone / Android:** Setări Safari / Chrome → Șterge date site pentru `nexteraweb.ro`, sau deschide linkul din fereastră privată — telefonul păstrează deseori HTML vechi separat de desktop.

Codul site-ului folosește **`revalidate` 300 s** pe layout ca HTML-ul să nu rămână „înghețat” ani la CDN față de chunk-urile noi. În plus, un **CSS mic în `<head>`** ascunde nav-ul desktop pe ecran mic chiar dacă Tailwind nu s-a încărcat (evită „ServiciiPortofoliu…” lipit).

