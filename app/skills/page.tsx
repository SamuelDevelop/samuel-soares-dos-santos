import Footer from "@/components/Footer/Footer";
import PageSection from "@/components/PageSection/PageSection";

function Skills(){
    return (
        <>
            <PageSection 
                children = {
                <>
                    <h1>Quando falamos em habilidades...</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 1:</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 2:</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 3:</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgDark"
                toLeft={true}
            />
            <PageSection 
                children = {
                <>
                    <h1>Pratileira 4:</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgPurple"
                toLeft={false}
            />
            <PageSection 
                children = {
                <>
                    <h1>...E pronto para conhecer o novo!</h1>
                    
                    <p>Falamos também sobre um conjunto de vivências,</p>
                    <p>Que contribuem para que estas habilidades sejam desenvolvidas, assim sendo resolvi organiza-las em pratileiras.</p>
                    <p>Cada pratileira conta um pouquinha da históra de como achegamos até ali.</p>
                </>
                } 
                colorClass="bgWhite"
                toLeft={false}
            />

            <Footer 
                bgColor="bgWhite"      
            /> 
        </>
    )
}

export default Skills;