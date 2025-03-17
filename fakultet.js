export function fakultet (tall) {
    if (tall<=0)
        return NaN
    if (tall <=2)
        return tall
    else 
        return fakultet (tall-1)*tall
}