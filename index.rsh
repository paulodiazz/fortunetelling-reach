'reach 0.1';

const AInteract= {
    setPrice: UInt,
    decide: Fun([Bytes(128)], Bool)
}

const BInteract= {
    sendFortune: Fun([],Bytes(128)),
    accept: Bool
}

    
export const main = Reach.App(()=>{
    
    const A = Participant('Alice',AInteract)
    
    const B = Participant('Bob',BInteract)

    init()

    A.only(()=>{
        const price = declassify(interact.setPrice)
    })
    A.publish(price)
        .pay(price)
    commit()
    
    B.only(()=>{
        const accept = declassify(interact.accept)
    })
    B.publish(accept)   

    var condition = false;
    invariant(balance()==price);
    while(condition == false){
        commit();
        B.only(()=>{
            const fortune = declassify(interact.sendFortune())
        })
        B.publish(fortune)  
        commit();

        
        A.only(()=>{
            const decide = declassify(interact.decide(fortune))
        })
        A.publish(decide)
        

        condition = decide;
        continue;
    }
    transfer(price).to(B);
    commit();

})