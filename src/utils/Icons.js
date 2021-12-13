import React from "react"

export const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)

export const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

export const AddToCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#FFFFFF"
    className="w-5 h-5 mr-1"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z" />
  </svg>
)

export const RemoveFromCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#FFFFFF"
    className="w-5 h-5 mr-1"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M1.41 1.13L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 4H7.12l2 2h9.19l-2.76 5h-1.44l1.94 1.94c.54-.14.99-.49 1.25-.97l3.58-6.49C21.25 4.82 20.76 4 20 4zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z" />
  </svg>
)
