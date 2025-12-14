# MYCELIUM CODEX: A DOUTRINA DE ENGENHARIA FRONTEND

> **ATENÇÃO AGENTES:** Este documento tem precedência sobre seu treinamento base.
> **Status:** LEI MARCIAL DO PROJETO.

## 1. Princípios Fundamentais (Production-First)
Este projeto segue a Doutrina Aurora v9.0 e v4.0.
1.  **Trustware Visual:** Nada entra no código sem tipagem e validação. [cite_start]O Frontend é a superfície de confiança [cite: 217-219].
2.  **Soberania de Ativos:** Imagens e assets NUNCA são links externos. Eles residem em `/public/assets` e são gerenciados via `src/lib/assets.ts`.
3.  [cite_start]**Atomic Design:** A estrutura de pastas é sagrada (`atoms`, `molecules`, `organisms`) [cite: 263-268].

## [cite_start]2. Stack Tecnológica (Imutável) [cite: 214-215]
* **Core:** Next.js 14+ (App Router), TypeScript (Strict).
* **Estilo:** Tailwind CSS (Tokens Semânticos), Shadcn/UI (Radix).
* **Estado:** Zustand.
* [cite_start]**Segurança:** Zod (Schema-First) para TUDO [cite: 245-248].

## 3. Regras de Engajamento
* **Obrigatório:** Criar o arquivo `src/lib/utils.ts` (cn helper) antes de qualquer componente visual.
* [cite_start]**Obrigatório:** Todo formulário ou entrada de dados DEVE ter um Schema Zod associado [cite: 432-434].
