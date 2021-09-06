package com.fabrica.log.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fabrica.log.domain.model.Projetos;

@Repository
public interface ProjetoRepository extends JpaRepository<Projetos, Long>{
	List<Projetos> findAllByOrderByValorDesc();
	List<Projetos> findByNome(String nome);
	List<Projetos> findByNomeContaining(String nome);
}
