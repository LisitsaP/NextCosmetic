import CosmeticItem from './cosmetic-item';
import cls from './cosmetic-grid.module.css';
export default function CosmeticGrid({cosmetics}){
    return(
        <ul className={cls.cosmetics}>
            {cosmetics.map((cosmetic)=>(<li key={cosmetic.id}>
                <CosmeticItem {...cosmetic}/>
            </li>))}
        </ul>
    )
}