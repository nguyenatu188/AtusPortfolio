import { useState } from 'react';
import { DndContext, closestCorners, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import { SectionWrapper } from '../hoc';
import { technologies as initialTechnologies } from '../constants';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { TbHandFinger } from "react-icons/tb";
import SortableItem from './SortableItem';

const Tech = () => {
  
  const [technologies, setTechnologies] = useState(initialTechnologies.map((item, index) => ({
    ...item,
    id: `tech-${index}`,  // Initialize IDs with a unique pattern
  })));
  const [activeId, setActiveId] = useState(null);

  const handleDragStart = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const newIndex = technologies.findIndex((item) => item.name === over.id);

      setTechnologies((items) => {
        const oldIndex = items.findIndex((item) => item.name === active.id);
        const reorderedItems = arrayMove(items, oldIndex, newIndex);

        const oldRect = items[oldIndex];
        const newRect = reorderedItems[newIndex];

        if (!newRect || !oldRect) {
          return items; // Return current items if positions are not valid
        }

        // Apply position and scale transformations
        const updatedItems = reorderedItems.map((item, index) => ({
          ...item,
          scaleX: newRect.width / oldRect.width,
          scaleY: newRect.height / oldRect.height,
          id: `tech-${index}`, // Update IDs based on the new order
        }));

        return updatedItems;
      });
    }
  };

  const handleDragEnd = () => {
    setActiveId(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <DndContext 
        collisionDetection={closestCorners} 
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={technologies} strategy={rectSortingStrategy}>
          <div className="mt-10 flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology, index) => (
              <SortableItem key={technology.id} id={technology.name}>
                <div
                  className={`w-28 h-28 ${activeId === technology.name ? 'opacity-50' : ''}`}
                  style={{
                    transform: activeId === technology.name 
                      ? `translate(${technology.x}px, ${technology.y}px) scale(${technology.scaleX || 1}, ${technology.scaleY || 1})`
                      : 'none'
                  }}
                >
                  <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
                </div>
              </SortableItem>
            ))}
          </div>
        </SortableContext>
        
        <DragOverlay>
          {activeId ? (
            <div className='w-28 h-28'>
              <img
                src={technologies.find((tech) => tech.name === activeId)?.icon}
                alt={activeId}
                className='w-full h-full object-contain'
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <div className='mt-10 w-full flex justify-center items-center z=30'>
        <div className='w-[102px] h-[44px] rounded-3xl border-4 border-secondary flex items-start p-2'>
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
          >
            <TbHandFinger className='text-secondary text-5xl' />
          </motion.div>
        </div>
      </div>
      <p className='mt-5 text-center text-secondary text-[1rem]'>Drag and drop the techs to reorder</p>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
