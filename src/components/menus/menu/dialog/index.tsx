"use client";
import { robotoSlab } from "@/app/fonts/font-variables";
import { MenuCategory } from "@/data/types";
import { Modal } from "antd";
import { useState } from "react";

const MenuDialog = ({ menu }: { menu: MenuCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="text-sm font-medium px-4 py-1 bg-themePrimary text-black hover:brightness-105 transition-all mt-4">
        View List
      </button>
      <Modal
        centered={true}
        title={
          <p
            className={`text-2xl md:text-3xl font-medium text-themePrimary ${robotoSlab.className}`}>{`${menu.title} Menu`}</p>
        }
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="custom_menu_modal"
        closeIcon={
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        }>
        <ul
          className={`mt-4 list-disc list-inside text-lg text-white ${robotoSlab.className}`}>
          {menu.menuItems.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default MenuDialog;
