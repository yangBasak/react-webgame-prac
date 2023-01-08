import {useRef, useEffect} from 'react'

/**
 * const [isRunning, setIsRunning] = useState(true)
 * useInterval(()=>{
 *   console.log('함수코드)
 * },isRunning ? 1000 : null) // null이면 clear
 */

function useInterval(cb, delay){
    const savedCallback = useRef();

    useEffect(()=>{
        savedCallback.current = cb
    })

    useEffect(()=>{
        function tick(){
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])

    return savedCallback.current
}

export default useInterval