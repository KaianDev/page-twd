import React from "react";

export const Footer = () => {
    return (
        <footer className="mt-8 py-6 px-4 text-center text-xs bg-secondary-normal text-white">
            <img
                src="/assets/star-logo.png"
                alt="Logo STAR+"
                className="w-52 mx-auto my-8"
            />

            <p className="mx-auto sm:w-[90%] mb-4">
                &reg; 2022 Disney e The Walt Disney Company. Todos os direitos
                reservados. Serviço de assinatura paga. Conteúdo sujeito a
                disponibilidade.
            </p>

            <p className="mx-auto sm:w-[90%] mb-4">
                Star+ é um serviço pago, baseado em assinatura e sujeito a
                termos e condições. O serviço Star+ é comercializado por The
                Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das
                Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP –
                CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
            </p>

            <small className="block text-[12px] text-right text-zinc-800">
                Developer by{" "}
                <a
                href="https://github.com/KaianDev" target="_blank"
                    className="hover:underline hover:text-sky-500">
                    KaianDev
                </a>
            </small>
        </footer>
    );
};
