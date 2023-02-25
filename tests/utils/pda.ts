import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { Resynth } from "../idl/resynth";

export function syntheticAssetPDA(
  program: Program<Resynth>,
  syntheticAsset: PublicKey
) {
  const collateralVault = PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), syntheticAsset.toBuffer()],
    program.programId
  )[0];
  const syntheticMint = PublicKey.findProgramAddressSync(
    [Buffer.from("mint"), syntheticAsset.toBuffer()],
    program.programId
  )[0];
  const assetAuthority = PublicKey.findProgramAddressSync(
    [Buffer.from("authority"), syntheticAsset.toBuffer()],
    program.programId
  )[0];
  return { collateralVault, syntheticMint, assetAuthority };
}

export function marginAccountPDA(
  program: Program<Resynth>,
  owner: PublicKey,
  syntheticAsset: PublicKey
) {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("margin_account"),
      syntheticAsset.toBuffer(),
      owner.toBuffer(),
    ],
    program.programId
  )[0];
}
