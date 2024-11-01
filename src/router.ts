// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/about`
  | `/me`
  | `/orders`
  | `/orders/crypto/:id`
  | `/orders/giftcards/:id`;

export type Params = {
  "/orders/crypto/:id": { id: string };
  "/orders/giftcards/:id": { id: string };
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
