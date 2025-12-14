# MYCELIUM CODEX: DOUTRINA FRONTEND (v9.0)
> **STATUS:** LEI MARCIAL.

## 1. Princípios de Soberania (Trustware)
1.  **Atomic Design Rigoroso:**
    * `atoms/`: Botões, Inputs, Labels (Burros/Puros).
    * `molecules/`: Cards, Campos de Upload (Visual + Dados Simples).
    * `organisms/`: HeroSection, ChartsSection (Composição).
    * `templates/`: Layouts de Página.
2.  **Soberania de Ativos:** NENHUM asset externo. Tudo em `/public/assets`.
3.  **Zod Schema-First:** Nada entra no sistema sem validação de tipo.

## 2. Stack Visual
* **Engine:** Next.js 14 (App Router).
* **Styling:** Tailwind CSS + Framer Motion (obrigatório para "Exo Ape Feel").
* **State:** Zustand (Soberano).

## 3. Regra de Ouro (Anti-Regressão)
* **Visual Separado da Lógica:** O componente `HeroSection` NUNCA deve saber o que é um CSV. Ele apenas recebe dados prontos ou desenha o "Manequim".
