import styles from './ComponentImg.module.css'
function ComponentImg() {
    return(
        <>  
            <h3 className={styles.titleImg}>Import de imagens:</h3>
            <img src="https://images.pexels.com/photos/13392671/pexels-photo-13392671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>    
        </>
    )
}

export default ComponentImg