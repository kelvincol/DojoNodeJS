import { pedra, papel, tesoura } from "./jokepo"

test('verifica quem ganha o jokepo', () => {
    expect(pedra(0)).toBe("empate")
    expect(pedra(1)).toBe("vitoria")
    expect(pedra(2)).toBe("perdeu")
    expect(papel(2)).toBe("empate")
    expect(papel(0)).toBe("vitoria")
    expect(papel(1)).toBe("perdeu")
    expect(tesoura(1)).toBe("empate")
    expect(tesoura(2)).toBe("vitoria")
    expect(tesoura(0)).toBe("perdeu")
})